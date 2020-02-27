import { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"
import { mq } from "./index"

const style = css`
  @font-face {
    font-family: "Suisse";
    src: url("/fonts/SuisseIntl-Regular.otf");
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body,
  html {
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    letter-spacing: 0.02em;
    background: ${props => props.theme.colors.secondary};
    font-size: 18px;
    overscroll-behavior-y: none;

    @media ${mq.xs} {
      font-size: 19px;
    }
    @media ${mq.sm} {
      font-size: 20px;
    }
    @media ${mq.md} {
      font-size: 21px;
    }
    @media ${mq.lg} {
      font-size: 1.3vw;
    }

    &:after {
      /* for nav blend mode */
      content: "";
      width: 100%;
      height: 100%;
      background: white;
      position: fixed;
      z-index: -10;
    }
  }

  body {
    padding-top: ${props => props.theme.remScale[5]};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${props => props.theme.lineHeights.heading};
  }

  img,
  video {
    display: block;
    width: 100%;
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle