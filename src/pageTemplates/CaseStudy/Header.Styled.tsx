import styled from "styled-components"
import { Grid } from "components"

const Wrapper = styled(Grid)`
  grid-row-gap: 1rem;
`

const Col = styled.div`
  grid-column: span 6;
`

const Title = styled(Col)`
  margin-top: ${props => props.theme.margins.large};
`

const Intro = styled(Col)`
  max-width: 35em;
  margin-bottom: ${props => props.theme.remScale[0]};
`
const Breakdown = styled(Col)`
  grid-column: span 3;
`

const Deliverables = styled(Breakdown)`
  max-width: 16em;

  p {
    margin-bottom: ${props => props.theme.remScale[0]};
  }
`

export default {
  Title,
  Intro,
  Breakdown,
  Deliverables,
  Wrapper,
}
