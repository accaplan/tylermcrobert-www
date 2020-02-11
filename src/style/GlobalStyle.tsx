import { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"

const style = css`
  body,
  html {
    font-size: 23px;
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${props => props.theme.lineHeights.heading};
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle