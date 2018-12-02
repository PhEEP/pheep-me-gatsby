import { lighten } from 'polished'

export const violet = `#8e00ba`
export const turquoise = `#59f7c2`
export const slateBlue = `#6369d1`
export const ruby = `#d81159`
export const seashell = `#f9f3ed`
export const richBlack = `#12021f`

const theme = {
  colors: {
    stroke: seashell,
    base: richBlack, //'#121212', // Black
    primary: violet,
    secondary: lighten(0.2, richBlack), // Medium Gray
    tertiary: lighten(0.8, richBlack), // Light Gray
    highlight: turquoise, // Light Blue
    accent: ruby,
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
