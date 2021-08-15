import { UNICODE } from '../constants'
import React, { useEffect, useState } from 'react'
import { colors, size } from 'style'
import styled from 'styled-components'

const PASSWORD = 'gotme'

export const LockScreen: React.FC = () => {
  const [success, setSuccess] = useState(false)

  return (
    <>
      {!success && (
        <LockScreenStyle>
          <Form onSuccess={() => setSuccess(true)} />
        </LockScreenStyle>
      )}
    </>
  )
}

const LockScreenStyle = styled.section`
  text-transform: uppercase;

  border-radius: ${size[0]};
  box-shadow: 0 0 5rem ${colors.gray};

  bottom: ${size[0]};
  left: ${size[0]};
  padding: ${size[2]};

  position: fixed;
  display: grid;
  align-items: center;
  justify-content: center;

  height: 30rem;
  width: calc(100vw - 2rem);
  max-height: calc(100vh - 2rem);
  max-width: 20rem;

  color: ${colors.blue};
  background: ${colors.secondary};

  z-index: 1000000000000000000000000000000;
`
const FormStyle = styled.form`
  grid-gap: ${size[4]};
  display: flex;
  flex-direction: column;
  align-items: center;

  button,
  input {
    all: inherit;
  }

  input {
    border-bottom: 2px solid ${colors.blue};
    width: 100%;
  }

  img {
    width: ${size[5]};
  }
`

const FormWrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;

  input::placeholder {
    font-size: 10px;
    position: relative;
    top: -3px;
  }
`

const Form: React.FC<{ onSuccess: (c: boolean) => void }> = ({ onSuccess }) => {
  const handleInputChange = (e: any) => {
    if (e.target.value === PASSWORD) {
      onSuccess(true)
    }
  }

  useEffect(() => {}, [])
  return (
    <FormStyle onSubmit={e => e.preventDefault()}>
      <img src="https://netacea-queue-assets.s3-eu-west-1.amazonaws.com/gap/v1/YZYGAP_LOGO_REFLEX_BLUE.svg" />
      <FormWrapperStyle>
        <input
          type="password"
          onChange={e => handleInputChange(e)}
          placeholder="Please enter password to continue"
        />
        <button type="submit">{UNICODE.RIGHT}</button>
      </FormWrapperStyle>
    </FormStyle>
  )
}

export default LockScreen
