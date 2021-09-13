import React, { useState } from 'react'
import { Wrapper } from 'components'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { UNICODE } from '../../constants'
import S from './Nav.Styled'
import { useApp } from 'hooks'

const Nav = () => {
  return (
    <S.Nav>
      <Wrapper>
        <S.Content>
          <div>
            <Link href="/">
              <a>Asher Caplan</a>
            </Link>
            <CurationNav />
          </div>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </S.Content>
      </Wrapper>
    </S.Nav>
  )
}

const CurationNav = () => {
  const app = useApp()
  const ctxId = Cookies.get('ctx-id')

  const [isHover, setHover] = useState<boolean>(false)
  const clearCookie = () => {
    Cookies.remove('ctx-id')
    Router.push('/')
  }

  if (ctxId) {
    const name = app.context.title

    return (
      <span
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clearCookie}
      >
        {' '}
        {UNICODE.X} {name} {isHover && <span>(close)</span>}
      </span>
    )
  }
  return null
}

export default Nav
