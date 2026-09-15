<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import {
  computeLogoPhase,
  fragmentShader,
  logoRainbowDefaults,
  plainFragmentShader,
  vertexShader,
} from '../shaders/wikiLogoRainbow.js'

const LOGO_URL = withBase('/home/logo_replace.png')
const ASPECT = 544 / 160

// Match titlemenu_replace.anm2 + title_menu_logo_holder.lua.
// These are TitleMenu design-space values, not arbitrary web offsets.
const TITLE_DESIGN_WIDTH = 480
const STAGE_DESIGN_HEIGHT = 140
const LOGO_WIDTH = 544
const LOGO_HEIGHT = 160
const LOGO_X_POSITION = 230
const LOGO_Y_POSITION = 0
const LOGO_X_PIVOT = 262
const LOGO_Y_PIVOT = 4
const LOGO_OFFSET_X = -39
const LOGO_OFFSET_Y = -15

const rootRef = ref(null)
const logoRef = ref(null)
const canvasRef = ref(null)
const fallback = ref(false)
const reducedMotion = ref(false)

let gl = null
let plainProgram = null
let rainbowProgram = null
let texture = null
let buffer = null
let raf = 0
let resizeObserver = null
let sheetImage = null
let destroyed = false

let plainAttribs = null
let rainbowAttribs = null
let plainTextureUniform = null
const rainbowUniforms = {}

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function compile(glCtx, type, source) {
  const shader = glCtx.createShader(type)
  glCtx.shaderSource(shader, source)
  glCtx.compileShader(shader)
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    const info = glCtx.getShaderInfoLog(shader)
    glCtx.deleteShader(shader)
    throw new Error(info || 'shader compile failed')
  }
  return shader
}

function createProgram(glCtx, vsSource, fsSource) {
  const vs = compile(glCtx, glCtx.VERTEX_SHADER, vsSource)
  const fs = compile(glCtx, glCtx.FRAGMENT_SHADER, fsSource)
  const prog = glCtx.createProgram()
  glCtx.attachShader(prog, vs)
  glCtx.attachShader(prog, fs)
  glCtx.linkProgram(prog)
  glCtx.deleteShader(vs)
  glCtx.deleteShader(fs)
  if (!glCtx.getProgramParameter(prog, glCtx.LINK_STATUS)) {
    const info = glCtx.getProgramInfoLog(prog)
    glCtx.deleteProgram(prog)
    throw new Error(info || 'program link failed')
  }
  return prog
}

function loadTexture(glCtx, image) {
  const tex = glCtx.createTexture()
  glCtx.bindTexture(glCtx.TEXTURE_2D, tex)
  glCtx.pixelStorei(glCtx.UNPACK_FLIP_Y_WEBGL, 1)
  glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE)
  glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE)
  glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.LINEAR)
  glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.LINEAR)
  glCtx.texImage2D(glCtx.TEXTURE_2D, 0, glCtx.RGBA, glCtx.RGBA, glCtx.UNSIGNED_BYTE, image)
  return tex
}

function syncLogoPlacement() {
  const stage = rootRef.value
  const placement = logoRef.value
  if (!stage || !placement) return

  const scale = stage.clientWidth / TITLE_DESIGN_WIDTH
  const leftDesign = LOGO_X_POSITION - LOGO_X_PIVOT + LOGO_OFFSET_X
  const topDesign = LOGO_Y_POSITION - LOGO_Y_PIVOT + LOGO_OFFSET_Y

  placement.style.left = `${leftDesign * scale}px`
  placement.style.top = `${topDesign * scale}px`
  placement.style.width = `${LOGO_WIDTH * scale}px`
  placement.style.height = `${LOGO_HEIGHT * scale}px`
}

function syncCanvasSize() {
  const canvas = canvasRef.value
  const placement = logoRef.value
  if (!canvas || !placement || !gl) return
  const cssW = placement.clientWidth || LOGO_WIDTH
  const cssH = placement.clientHeight || cssW / ASPECT
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = Math.max(1, Math.round(cssW * dpr))
  const h = Math.max(1, Math.round(cssH * dpr))
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w
    canvas.height = h
  }
  canvas.style.width = `${cssW}px`
  canvas.style.height = `${cssH}px`
  gl.viewport(0, 0, w, h)
}

function cropToUv(crop) {
  const { sheetSize } = logoRainbowDefaults
  const u0 = crop.x / sheetSize.w
  const u1 = (crop.x + crop.w) / sheetSize.w
  // FLIP_Y uploaded: image top → v=1
  const vTop = 1 - crop.y / sheetSize.h
  const vBot = 1 - (crop.y + crop.h) / sheetSize.h
  return { u0, u1, vTop, vBot }
}

function bandVerts(crop, y0, y1) {
  const { u0, u1, vTop, vBot } = cropToUv(crop)
  // Canvas Y grows down; WebGL NDC Y grows up. Map band [y0,y1] in 0..1 canvas space.
  const ndcY0 = 1 - 2 * y1
  const ndcY1 = 1 - 2 * y0
  return new Float32Array([
    -1, ndcY0, u0, vBot,
    1, ndcY0, u1, vBot,
    -1, ndcY1, u0, vTop,
    1, ndcY1, u1, vTop,
  ])
}

function bindAttribs(attribs) {
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.enableVertexAttribArray(attribs.aPos)
  gl.enableVertexAttribArray(attribs.aUv)
  gl.vertexAttribPointer(attribs.aPos, 2, gl.FLOAT, false, 16, 0)
  gl.vertexAttribPointer(attribs.aUv, 2, gl.FLOAT, false, 16, 8)
}

function drawStaticLogo() {
  const crop = logoRainbowDefaults.cropStatic
  gl.useProgram(plainProgram)
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.uniform1i(plainTextureUniform, 0)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, bandVerts(crop, 0, 1), gl.DYNAMIC_DRAW)
  bindAttribs(plainAttribs)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}

function drawRainbowBand(crop, lumLow, lumHigh, phase, y0, y1) {
  gl.useProgram(rainbowProgram)
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.uniform1i(rainbowUniforms.uTexture, 0)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, bandVerts(crop, y0, y1), gl.DYNAMIC_DRAW)
  bindAttribs(rainbowAttribs)

  gl.uniform1f(rainbowUniforms.uPhase, phase)
  gl.uniform1f(rainbowUniforms.uLumLow, lumLow)
  gl.uniform1f(rainbowUniforms.uLumHigh, lumHigh)
  gl.uniform1f(rainbowUniforms.uSpatialAngle, (logoRainbowDefaults.spatialAngleDeg * Math.PI) / 180)
  gl.uniform1f(rainbowUniforms.uSpatialDensity, logoRainbowDefaults.spatialDensity)
  gl.uniform1f(rainbowUniforms.uGrayHueWeight, logoRainbowDefaults.grayHue)
  gl.uniform1f(rainbowUniforms.uBendWeight, logoRainbowDefaults.bend)
  gl.uniform1f(rainbowUniforms.uShapeContrast, logoRainbowDefaults.shapeContrast)
  gl.uniform1f(rainbowUniforms.uNoiseSeed, logoRainbowDefaults.noiseSeed)
  gl.uniform2f(rainbowUniforms.uTextureSize, crop.w, crop.h)

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}

function renderFrame() {
  if (destroyed || fallback.value || !gl || !plainProgram || !rainbowProgram || !texture) return
  syncLogoPlacement()
  syncCanvasSize()
  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

  drawStaticLogo()

  const phase = computeLogoPhase(performance.now() / 1000, reducedMotion.value)
  const d = logoRainbowDefaults
  drawRainbowBand(d.cropTitle, d.titleLumLow, d.titleLumHigh, phase, 0, 0.5)
  drawRainbowBand(d.cropText, d.textLumLow, d.textLumHigh, phase, 0.5, 1)
}

function tick() {
  if (destroyed) return
  if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
    raf = 0
    return
  }
  renderFrame()
  if (!reducedMotion.value) {
    raf = requestAnimationFrame(tick)
  } else {
    raf = 0
  }
}

function onVisibility() {
  if (document.visibilityState === 'visible' && !reducedMotion.value && !raf && !fallback.value) {
    raf = requestAnimationFrame(tick)
  }
}

function onMotionChange(event) {
  reducedMotion.value = event.matches
  if (raf) {
    cancelAnimationFrame(raf)
    raf = 0
  }
  renderFrame()
  if (!reducedMotion.value) {
    raf = requestAnimationFrame(tick)
  }
}

async function boot() {
  const canvas = canvasRef.value
  if (!canvas) return
  reducedMotion.value = prefersReducedMotion()

  try {
    gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    })
    if (!gl) throw new Error('webgl unavailable')

    plainProgram = createProgram(gl, vertexShader, plainFragmentShader)
    rainbowProgram = createProgram(gl, vertexShader, fragmentShader)
    buffer = gl.createBuffer()

    plainAttribs = {
      aPos: gl.getAttribLocation(plainProgram, 'aPosition'),
      aUv: gl.getAttribLocation(plainProgram, 'aTexCoord'),
    }
    plainTextureUniform = gl.getUniformLocation(plainProgram, 'uTexture')
    rainbowAttribs = {
      aPos: gl.getAttribLocation(rainbowProgram, 'aPosition'),
      aUv: gl.getAttribLocation(rainbowProgram, 'aTexCoord'),
    }

    ;[
      'uTexture',
      'uPhase',
      'uLumLow',
      'uLumHigh',
      'uSpatialAngle',
      'uSpatialDensity',
      'uGrayHueWeight',
      'uBendWeight',
      'uShapeContrast',
      'uNoiseSeed',
      'uTextureSize',
    ].forEach((name) => {
      rainbowUniforms[name] = gl.getUniformLocation(rainbowProgram, name)
    })

    sheetImage = await new Promise((resolve, reject) => {
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('logo texture load failed'))
      img.src = LOGO_URL
    })

    texture = loadTexture(gl, sheetImage)
    logoRainbowDefaults.sheetSize.w = sheetImage.naturalWidth || logoRainbowDefaults.sheetSize.w
    logoRainbowDefaults.sheetSize.h = sheetImage.naturalHeight || logoRainbowDefaults.sheetSize.h
    syncLogoPlacement()
    syncCanvasSize()
    renderFrame()
    if (!reducedMotion.value) {
      raf = requestAnimationFrame(tick)
    }
  } catch (err) {
    console.warn('[WikiGameLogo] falling back to static logo:', err)
    fallback.value = true
    teardownGl()
  }
}

function teardownGl() {
  if (raf) {
    cancelAnimationFrame(raf)
    raf = 0
  }
  if (gl && texture) gl.deleteTexture(texture)
  if (gl && buffer) gl.deleteBuffer(buffer)
  if (gl && plainProgram) gl.deleteProgram(plainProgram)
  if (gl && rainbowProgram) gl.deleteProgram(rainbowProgram)
  texture = null
  buffer = null
  plainProgram = null
  rainbowProgram = null
  plainAttribs = null
  rainbowAttribs = null
  plainTextureUniform = null
  gl = null
}

onMounted(() => {
  destroyed = false
  syncLogoPlacement()
  boot()
  if (typeof ResizeObserver !== 'undefined' && rootRef.value) {
    resizeObserver = new ResizeObserver(() => {
      syncLogoPlacement()
      if (!fallback.value) renderFrame()
    })
    resizeObserver.observe(rootRef.value)
  }
  document.addEventListener('visibilitychange', onVisibility)
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.addEventListener) mq.addEventListener('change', onMotionChange)
    else if (mq.addListener) mq.addListener(onMotionChange)
  }
})

onBeforeUnmount(() => {
  destroyed = true
  document.removeEventListener('visibilitychange', onVisibility)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  teardownGl()
})
</script>

<template>
  <div
    ref="rootRef"
    class="wiki-game-logo-stage"
    :style="{ '--wiki-logo-stage-height': STAGE_DESIGN_HEIGHT }"
    :class="{
      'wiki-game-logo-stage--static': fallback,
      'wiki-game-logo-stage--reduced': reducedMotion,
    }"
  >
    <div class="wiki-game-logo__glow" aria-hidden="true" />
    <div ref="logoRef" class="wiki-game-logo__placement">
      <div class="wiki-game-logo__float">
        <canvas
          v-show="!fallback"
          ref="canvasRef"
          class="wiki-game-logo__canvas"
          role="img"
          aria-label="Glaze Ceremony logo"
        />
        <div
          v-if="fallback"
          class="wiki-game-logo__fallback"
          role="img"
          aria-label="Glaze Ceremony logo"
        >
          <img :src="LOGO_URL" alt="" class="wiki-game-logo__fallback-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wiki-game-logo-stage {
  position: relative;
  width: min(100%, 680px);
  margin-inline: auto;
  aspect-ratio: 480 / var(--wiki-logo-stage-height);
  overflow-x: clip;
  overflow-y: visible;
}

.wiki-game-logo__glow {
  position: absolute;
  left: 8%;
  right: 8%;
  top: 4%;
  bottom: 8%;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    color-mix(in srgb, var(--vp-c-brand-1) 7%, transparent),
    transparent 65%
  );
  z-index: 0;
}

.wiki-game-logo__placement {
  position: absolute;
  z-index: 1;
}

.wiki-game-logo__float {
  width: 100%;
  height: 100%;
  animation: wiki-logo-float 2.4s ease-in-out infinite;
}

.wiki-game-logo-stage--reduced .wiki-game-logo__float,
.wiki-game-logo-stage--static .wiki-game-logo__float {
  animation: none;
}

.wiki-game-logo__canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.wiki-game-logo__fallback {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* Crop static Logo (0,0)-(544,160) from 640×640 sheet. */
.wiki-game-logo__fallback-img {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(640 / 544 * 100%);
  height: auto;
  max-width: none;
  transform: translateY(0);
  pointer-events: none;
  user-select: none;
}

@keyframes wiki-logo-float {
  0%,
  100% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(2px);
  }
}

@media (max-width: 640px) {
  .wiki-game-logo-stage {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wiki-game-logo__float {
    animation: none;
  }
}
</style>
