<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const TEXT = 'GLAZE CEREMONY PROMISED LAND   '
const A2Z_URL = withBase('/home/a2z.png')

const DEFAULTS = {
  StartX: 320,
  EndX: 80,
  Y: 95,
  Speed: 28,
  FadeWidth: 48,
  LetterSpacing: 4,
  RainbowSpeed: 0.7,
  WaveSpeed: 0.26,
  EdgeIntensity: 0.45,
  EdgeWaveWidth: 0.75,
  EdgePeakSharpness: 6,
  BounceSpeed: 2.5,
  BounceTravelSpeed: 24,
  BounceHeight: 9,
  SquashX: 0.1,
  SquashY: 0.95,
  ImpactSharpness: 6,
  TangentRotation: 1,
}

const WIDE = { A: true, I: true, J: true, M: true, T: true, W: true }
const CELL = 32
const VIEW_WIDTH = DEFAULTS.StartX - DEFAULTS.EndX

const rootRef = ref(null)
const canvasRef = ref(null)
const fallback = ref(false)
const reducedMotion = ref(false)

let sheet = null
let raf = 0
let resizeObserver = null
let destroyed = false
let frozenTime = 0
const tintCache = new Map()

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value))
}

function hsvToRgb(h, s, v) {
  h -= Math.floor(h)
  const sector = Math.floor(h * 6)
  const f = h * 6 - sector
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  switch (sector % 6) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, v]
    default:
      return [v, p, q]
  }
}

function glyphMetrics(char, spacing) {
  spacing = Math.max(0, Number(spacing) || 0)
  char = String(char || '').toUpperCase()
  if (char === ' ') return { frame: null, advance: 6 + spacing, center: 0 }
  const index = char.charCodeAt(0) - 65
  if (index < 0 || index > 25) return { frame: null, advance: 6 + spacing, center: 0 }
  if (WIDE[char]) return { frame: index, advance: 11 + spacing, center: 6 }
  return { frame: index, advance: 10 + spacing, center: 5 }
}

function measurePhrase(spacing) {
  let width = 0
  for (let i = 0; i < TEXT.length; i += 1) {
    width += glyphMetrics(TEXT[i], spacing).advance
  }
  return width
}

function buildGlyphs(time) {
  let startX = DEFAULTS.StartX
  let endX = DEFAULTS.EndX
  if (endX > startX) {
    const tmp = endX
    endX = startX
    startX = tmp
  }

  const spacing = DEFAULTS.LetterSpacing
  const width = measurePhrase(spacing)
  const speed = DEFAULTS.Speed
  let first = startX - ((time * speed) % width)
  while (first > endX - width) first -= width

  const glyphs = []
  for (let copyX = first; copyX <= startX + width; copyX += width) {
    let cursor = copyX
    for (let i = 0; i < TEXT.length; i += 1) {
      const { frame, advance, center } = glyphMetrics(TEXT[i], spacing)
      if (frame != null) {
        const left = cursor
        const right = cursor + advance - 1
        if (right >= endX && left <= startX) {
          const alpha = Math.min(
            clamp01((left - endX) / DEFAULTS.FadeWidth),
            clamp01((startX - left) / 10),
          )
          const glyphPitch = 14
          const spatialPhase = DEFAULTS.BounceSpeed / (DEFAULTS.BounceTravelSpeed * glyphPitch)
          const phase = time * DEFAULTS.BounceSpeed - (cursor - endX) * spatialPhase
          const liftWave = Math.max(0, Math.sin(phase))
          let slope = 0
          if (Math.sin(phase) > 0) {
            slope = 2 * Math.sin(phase) * Math.cos(phase) * DEFAULTS.BounceHeight * spatialPhase
          }
          const rotation = (Math.atan(slope) * 180) / Math.PI * DEFAULTS.TangentRotation
          const impact = Math.max(0, Math.sin(phase + Math.PI * 0.5)) ** DEFAULTS.ImpactSharpness
          glyphs.push({
            frame,
            x: cursor + center,
            y: DEFAULTS.Y - liftWave * liftWave * DEFAULTS.BounceHeight,
            alpha,
            sx: 1 + impact * DEFAULTS.SquashX,
            sy: 1 - impact * DEFAULTS.SquashY,
            rotation,
            hue: (time * DEFAULTS.RainbowSpeed + (cursor - endX) * 0.012) % 1,
            wavePhase: (time * DEFAULTS.WaveSpeed + (cursor - endX) * 0.019) % 1,
          })
        }
      }
      cursor += advance
    }
  }
  return glyphs
}

function tintedCell(frame, layer, r, g, b) {
  const hueBin = `${Math.round(r * 32)}_${Math.round(g * 32)}_${Math.round(b * 32)}`
  const key = `${layer}:${frame}:${hueBin}`
  let cached = tintCache.get(key)
  if (cached) return cached
  const off = document.createElement('canvas')
  off.width = CELL
  off.height = CELL
  const octx = off.getContext('2d')
  octx.imageSmoothingEnabled = false
  const sy = layer === 'edge' ? 0 : CELL
  octx.drawImage(sheet, frame * CELL, sy, CELL, CELL, 0, 0, CELL, CELL)
  octx.globalCompositeOperation = 'source-in'
  octx.fillStyle = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`
  octx.fillRect(0, 0, CELL, CELL)
  tintCache.set(key, off)
  if (tintCache.size > 400) {
    const first = tintCache.keys().next().value
    tintCache.delete(first)
  }
  return off
}

function drawTransformed(ctx, image, glyph, scale, originX, originY, alpha, composite = 'source-over') {
  const dx = originX + glyph.x * scale
  const dy = originY + (glyph.y - DEFAULTS.Y) * scale
  ctx.save()
  ctx.globalCompositeOperation = composite
  ctx.globalAlpha = alpha
  ctx.translate(dx, dy)
  ctx.rotate((glyph.rotation * Math.PI) / 180)
  ctx.scale(glyph.sx * scale, glyph.sy * scale)
  ctx.drawImage(image, -CELL / 2, -CELL / 2)
  ctx.restore()
}

function drawEdges(ctx, glyphs, scale, originX, originY) {
  for (const glyph of glyphs) {
    if (glyph.alpha <= 0.001) continue
    const black = tintedCell(glyph.frame, 'edge', 0, 0, 0)
    drawTransformed(ctx, black, glyph, scale, originX, originY, glyph.alpha)

    const wave = (Math.sin(glyph.wavePhase * Math.PI * 2) + 1) * 0.5
    const width = Math.max(0.05, Math.min(1, DEFAULTS.EdgeWaveWidth))
    const flash = clamp01((wave - (1 - width)) / width) ** DEFAULTS.EdgePeakSharpness
    if (flash <= 0.001 || DEFAULTS.EdgeIntensity <= 0) continue
    const [hr, hg, hb] = hsvToRgb(glyph.hue, 0.72, 1)
    const flashCell = tintedCell(glyph.frame, 'edge', hr, hg, hb)
    drawTransformed(
      ctx,
      flashCell,
      glyph,
      scale,
      originX,
      originY,
      glyph.alpha * flash * DEFAULTS.EdgeIntensity,
      'lighter',
    )
  }
}

function drawGlyphsPass(ctx, glyphs, scale, originX, originY) {
  for (const glyph of glyphs) {
    if (glyph.alpha <= 0.001) continue
    const [r, g, b] = hsvToRgb(glyph.hue, 0.72, 1)
    const colored = tintedCell(glyph.frame, 'glyph', r, g, b)
    drawTransformed(ctx, colored, glyph, scale, originX, originY, glyph.alpha)
  }
}

function syncSize() {
  const canvas = canvasRef.value
  const root = rootRef.value
  if (!canvas || !root) return null
  const cssW = root.clientWidth || 720
  const cssH = Math.max(42, Math.min(64, Math.round(cssW * 0.075)))
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = Math.max(1, Math.round(cssW * dpr))
  const h = Math.max(1, Math.round(cssH * dpr))
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w
    canvas.height = h
  }
  canvas.style.width = `${cssW}px`
  canvas.style.height = `${cssH}px`
  return {
    w,
    h,
    scale: (cssW / VIEW_WIDTH) * dpr,
    originY: h * 0.55,
  }
}

function renderFrame(time) {
  const canvas = canvasRef.value
  if (!canvas || !sheet || fallback.value) return
  const size = syncSize()
  if (!size) return
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, size.w, size.h)

  const glyphs = buildGlyphs(time)
  const originX = -DEFAULTS.EndX * size.scale
  drawEdges(ctx, glyphs, size.scale, originX, size.originY)
  drawGlyphsPass(ctx, glyphs, size.scale, originX, size.originY)
}

function tick() {
  if (destroyed) return
  if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
    raf = 0
    return
  }
  const time = reducedMotion.value ? frozenTime : performance.now() / 1000
  renderFrame(time)
  if (!reducedMotion.value) raf = requestAnimationFrame(tick)
  else raf = 0
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
  if (reducedMotion.value) frozenTime = performance.now() / 1000
  renderFrame(frozenTime || performance.now() / 1000)
  if (!reducedMotion.value) raf = requestAnimationFrame(tick)
}

async function boot() {
  reducedMotion.value = prefersReducedMotion()
  frozenTime = performance.now() / 1000
  try {
    sheet = await new Promise((resolve, reject) => {
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('a2z.png load failed'))
      img.src = A2Z_URL
    })
    renderFrame(frozenTime)
    if (!reducedMotion.value) raf = requestAnimationFrame(tick)
  } catch (err) {
    console.warn('[WikiTitleMarquee] falling back to text:', err)
    fallback.value = true
  }
}

onMounted(() => {
  destroyed = false
  boot()
  if (typeof ResizeObserver !== 'undefined' && rootRef.value) {
    resizeObserver = new ResizeObserver(() => {
      if (!fallback.value) {
        const t = reducedMotion.value ? frozenTime : performance.now() / 1000
        renderFrame(t)
      }
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
  if (raf) cancelAnimationFrame(raf)
  raf = 0
  tintCache.clear()
  document.removeEventListener('visibilitychange', onVisibility)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
})
</script>

<template>
  <div ref="rootRef" class="wiki-title-marquee" aria-hidden="true">
    <canvas v-show="!fallback" ref="canvasRef" class="wiki-title-marquee__canvas" />
    <p v-if="fallback" class="wiki-title-marquee__fallback">GLAZE CEREMONY PROMISED LAND</p>
  </div>
</template>

<style scoped>
.wiki-title-marquee {
  width: min(760px, 90vw);
  margin: 0.35rem auto 0;
  min-height: 42px;
}

.wiki-title-marquee__canvas {
  display: block;
  width: 100%;
  height: 56px;
}

.wiki-title-marquee__fallback {
  margin: 0;
  text-align: center;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
}

@media (max-width: 960px) {
  .wiki-title-marquee {
    width: min(760px, 88vw);
  }
}

@media (max-width: 640px) {
  .wiki-title-marquee {
    width: min(760px, 94vw);
  }
}
</style>
