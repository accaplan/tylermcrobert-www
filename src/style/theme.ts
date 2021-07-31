import modularScale from './modularScale'
import { ResponsiveSizes, ResponsiveImgSizeBlock } from 'types'

/**
 * Utils
 */

const scale: number[] = modularScale({ scale: 1.333, stepsDown: 2, length: 15 })
const remScale: string[] = scale.map(item => `${item}rem`)
const _msVar = (num: number) => `var(--ms${num})`

/**
 * Exports
 */

export const sizeVars = remScale
  .map((item, i) => {
    return `--ms${i - 2}:${item};`
  })
  .join('\n')

export const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  blue: 'navy',
  gray: 'grey',
}

export const fontFamilies = {
  sansSerif: `Suisse, helvetica, arial, sans-serif`,
}

export const lineHeights = {
  body: 1.2,
  heading: 1.05,
}

export const size = {
  standard: remScale[3],
  gutter: remScale[3],
  large: remScale[8],
  '-2': _msVar(-2),
  '-1': _msVar(-1),
  '0': _msVar(0),
  '1': _msVar(1),
  '2': _msVar(2),
  '3': _msVar(3),
  '4': _msVar(4),
  '5': _msVar(5),
  '6': _msVar(6),
  '7': _msVar(7),
  '8': _msVar(8),
  '9': _msVar(9),
  '10': _msVar(10),
  '11': _msVar(11),
  '12': _msVar(12),
  '13': _msVar(13),
  '14': _msVar(14),
  '15': _msVar(15),
}

export const responsiveSizes: ResponsiveSizes = {
  xxs: 0,
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576,
}

export const zIndex = {
  previewIndicator: 100,
  caseStudyOverlay: 20,
}
