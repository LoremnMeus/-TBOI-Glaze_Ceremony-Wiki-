/**
 * Web port of resources/shaders/qing_rainbow_roll.fs (Roll v3 core).
 * Engine Colorize/ColorOffset packing is replaced by explicit uniforms.
 */

export const vertexShader = `
attribute vec2 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

/** Pass-through for the static Logo base (Y=0..159). No hue / luminance remap. */
export const plainFragmentShader = `
precision mediump float;

uniform sampler2D uTexture;
varying vec2 vTexCoord;

void main() {
  vec4 c = texture2D(uTexture, vTexCoord);
  if (c.a <= 0.001) discard;
  gl_FragColor = c;
}
`

export const fragmentShader = `
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uTexture;
uniform float uPhase;
uniform float uLumLow;
uniform float uLumHigh;
uniform float uSpatialAngle;
uniform float uSpatialDensity;
uniform float uGrayHueWeight;
uniform float uBendWeight;
uniform float uShapeContrast;
uniform float uNoiseSeed;
uniform vec2 uTextureSize;

const float TAU = 6.28318530717958647692;
const float BLACK_LOW = 0.040;
const float BLACK_HIGH = 0.120;
const float MAX_GRAY_HUE_SPAN = 0.60;
const float MAX_BEND_SPAN = 0.20;
const float MIN_SHAPE_GAMMA = 0.80;
const float MAX_SHAPE_GAMMA = 1.80;
const float BEND_AMOUNT = 0.025;
const float FINE_DRIFT = 0.008;
const float HUE_REMAP_MIX = 0.30;
const float VALUE_MIN = 0.22;
const float VALUE_MAX = 1.00;
const float HIGHLIGHT_LIFT = 0.08;

float hash12(vec2 p) {
  float h = dot(p, vec2(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}

float noise2D(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float getLuminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

vec3 rainbowPalette(float t) {
  t = fract(t);
  vec3 c0 = vec3(1.00, 0.10, 0.16);
  vec3 c1 = vec3(1.00, 0.34, 0.10);
  vec3 c2 = vec3(1.00, 0.62, 0.08);
  vec3 c3 = vec3(1.00, 0.90, 0.14);
  vec3 c4 = vec3(0.55, 1.00, 0.22);
  vec3 c5 = vec3(0.20, 0.88, 1.00);
  vec3 c6 = vec3(0.18, 0.52, 1.00);
  vec3 c7 = vec3(0.38, 0.26, 1.00);
  vec3 c8 = vec3(0.86, 0.16, 1.00);
  vec3 c9 = vec3(1.00, 0.12, 0.52);
  if (t < 0.10) return mix(c0, c1, t / 0.10);
  if (t < 0.18) return mix(c1, c2, (t - 0.10) / 0.08);
  if (t < 0.28) return mix(c2, c3, (t - 0.18) / 0.10);
  if (t < 0.34) return mix(c3, c4, (t - 0.28) / 0.06);
  if (t < 0.42) return mix(c4, c5, (t - 0.34) / 0.08);
  if (t < 0.56) return mix(c5, c6, (t - 0.42) / 0.14);
  if (t < 0.68) return mix(c6, c7, (t - 0.56) / 0.12);
  if (t < 0.82) return mix(c7, c8, (t - 0.68) / 0.14);
  if (t < 0.92) return mix(c8, c9, (t - 0.82) / 0.10);
  return mix(c9, c0, (t - 0.92) / 0.08);
}

vec4 rainbowRollRecolor(
  vec4 source,
  vec2 uv,
  vec2 textureSize,
  float phase,
  float lumLow,
  float lumHigh,
  float spatialAngle,
  float spatialDensity,
  float grayHueWeight,
  float bendWeight,
  float shapeContrast,
  float noiseSeed
) {
  if (source.a <= 0.001) return source;

  float sourceStrength = max(source.r, max(source.g, source.b));
  float recolorMask = smoothstep(BLACK_LOW, BLACK_HIGH, sourceStrength);

  float rawLum = getLuminance(source.rgb);
  float remappedLum = clamp(
    (rawLum - lumLow) / max(lumHigh - lumLow, 0.001),
    0.0,
    1.0
  );

  vec2 p = uv - vec2(0.5);
  vec2 pixelPos = uv * textureSize;

  vec2 spatialDir = vec2(cos(spatialAngle), sin(spatialAngle));
  float spatialPhase = dot(p, spatialDir) * spatialDensity;

  float polarPhase = atan(p.y, p.x) / TAU;
  float bendSpan = clamp(bendWeight, 0.0, 1.0) * MAX_BEND_SPAN;
  spatialPhase += polarPhase * bendSpan;

  float hueLum = mix(rawLum, remappedLum, HUE_REMAP_MIX);
  float grayHueSpan = clamp(grayHueWeight, 0.0, 1.0) * MAX_GRAY_HUE_SPAN;
  float luminancePhase = (hueLum - 0.5) * grayHueSpan;

  float bend = (noise2D(pixelPos * 0.11 + vec2(noiseSeed * 13.17, noiseSeed * 37.91)) - 0.5) * BEND_AMOUNT;

  float cycle = phase * TAU;
  float fine = (noise2D(
    pixelPos * 0.27 +
    vec2(91.7 + noiseSeed * 7.1, 11.3 + noiseSeed * 5.3) +
    vec2(cos(cycle), sin(cycle)) * 0.35
  ) - 0.5) * FINE_DRIFT;

  float hueT = fract(phase + spatialPhase + luminancePhase + bend + fine);
  vec3 rainbowRGB = rainbowPalette(hueT);

  float shapeGamma = mix(
    MIN_SHAPE_GAMMA,
    MAX_SHAPE_GAMMA,
    clamp(shapeContrast, 0.0, 1.0)
  );
  float shapedLum = pow(smoothstep(0.0, 1.0, remappedLum), shapeGamma);
  float shapeValue = mix(VALUE_MIN, VALUE_MAX, shapedLum);
  rainbowRGB *= shapeValue;

  float lift = smoothstep(0.76, 1.0, remappedLum) * HIGHLIGHT_LIFT;
  rainbowRGB = clamp(rainbowRGB + vec3(lift), 0.0, 1.0);

  vec3 finalRGB = mix(source.rgb, rainbowRGB, recolorMask);
  return vec4(finalRGB, source.a);
}

void main() {
  vec2 texSize = max(uTextureSize, vec2(1.0));
  vec4 source = texture2D(uTexture, vTexCoord);
  if (source.a <= 0.001) discard;

  float lumLow = uLumLow;
  float lumHigh = uLumHigh;
  if (lumHigh <= lumLow + 0.001) {
    lumLow = 0.03;
    lumHigh = 0.92;
  }

  gl_FragColor = rainbowRollRecolor(
    source,
    vTexCoord,
    texSize,
    uPhase,
    lumLow,
    lumHigh,
    uSpatialAngle,
    uSpatialDensity,
    uGrayHueWeight,
    uBendWeight,
    uShapeContrast,
    uNoiseSeed
  );
}
`

/** Matches title_menu_logo_holder.lua defaults. */
export const logoRainbowDefaults = {
  titleLumLow: 0.07,
  titleLumHigh: 0.29,
  textLumLow: 0.05,
  textLumHigh: 0.10,
  spatialAngleDeg: 0,
  spatialDensity: 2.6,
  speed: 0.65,
  direction: 1,
  grayHue: 0.47,
  bend: 0.15,
  shapeContrast: 0.4,
  seed: 0.41,
  /** RAINBOW_ROLL_PHASE_CYCLE_FRAMES / 30 */
  periodSec: 240 / 30,
  /** angle0 + density index 10 → packed/255 noise seed */
  noiseSeed: 10 / 255,
  /** Static Logo layer from titlemenu Logo (full 544×160 title). */
  cropStatic: { x: 0, y: 0, w: 544, h: 160 },
  cropTitle: { x: 0, y: 160, w: 544, h: 80 },
  cropText: { x: 0, y: 240, w: 544, h: 80 },

  sheetSize: { w: 640, h: 640 },
}

export function computeLogoPhase(timeSec, reducedMotion = false) {
  const { speed, direction, seed, periodSec } = logoRainbowDefaults
  if (reducedMotion) {
    return (seed * 0.61803398875) % 1
  }
  const timePhase = (timeSec / periodSec) * speed * direction
  let phase = timePhase + seed * 0.61803398875
  phase = phase % 1
  if (phase < 0) phase += 1
  return phase
}
