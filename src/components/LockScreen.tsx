import { UNICODE } from '../constants'
import React from 'react'
import { colors, size } from 'style'
import styled from 'styled-components'

// const PASSWORD = 'gotme'

export const LockScreen: React.FC = () => {
  return (
    <LockScreenStyle>
      <Form />
      <CaptionStyle>Please enter password to continue</CaptionStyle>
    </LockScreenStyle>
  )
}

const CaptionStyle = styled.small`
  font-size: 20px;
  color: ${colors.gray};
`

const LockScreenStyle = styled.section`
  text-transform: uppercase;

  border-radius: 100px;
  box-shadow: 0 0 5rem ${colors.secondary};

  bottom: ${size[0]};
  left: ${size[0]};
  padding: ${size[0]};

  position: fixed;
  display: grid;
  align-items: center;
  justify-content: space-evenly;

  width: 50vh;
  height: 50vh;

  color: ${colors.blue};
  background: ${colors.secondary};

  z-index: 1000000000000000000000000000000;
`
const FormStyle = styled.form`
  max-height: ${size[0]};
  grid-gap: ${size[0]};
  display: flex;
  flex-direction: column;
  align-items: center;

  button,
  input {
    all: inherit;
  }

  input {
    border-bottom: 2px solid ${colors.blue};
  }

  img {
    width: ${size[5]};
  }
`

const FormWrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
`

const Form: React.FC<{}> = ({}) => {
  return (
    <FormStyle>
      <img src="https://netacea-queue-assets.s3-eu-west-1.amazonaws.com/gap/v1/YZYGAP_LOGO_REFLEX_BLUE.svg" />
      <FormWrapperStyle>
        <input type="password" />
        <button type="submit">{UNICODE.RIGHT}</button>
      </FormWrapperStyle>
    </FormStyle>
  )
}

export default LockScreen
