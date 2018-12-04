import { darken } from 'polished'

export const violet = `#8e00ba`
export const turquoise = `#59f7c2`
export const slateBlue = `#6369d1`
export const ruby = `#d81159`
export const seashell = `#f9f3ed`
export const richBlack = `#12021f`

const theme = {
  colors: {
    stroke: richBlack,
    base: seashell,
    secondary: darken(0.2, seashell),
    tertiary: darken(0.85, seashell),
    primary: violet,
    highlight: turquoise,
    accent: ruby,
    used: slateBlue,
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}

export default theme
