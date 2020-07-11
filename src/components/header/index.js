import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { css, keyframes } from '@emotion/core'

import Navigation from "./navigation"
import Logo from "./logo"


const Header = ({ menuLinks, scrolling, isHomepage }) => (
    <Nav  id="home" css={scrolling ? sticky : fixed }>
      <Div>
        <Logo />
        {isHomepage ? <Navigation lists={menuLinks}/> : "" }
        <div>
        </div>
      </Div>
    </Nav>
)

const fadeIn = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`

const sticky = css`
  position: fixed;
  top: 0;
  opacity: 0;
  animation: ${fadeIn} ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  box-shadow: 0px -36px 55px -2px rgba(0,0,0,0.51);
`

const fixed = css`
  position: fixed;
  top: 0;
`

const Nav = styled.nav`
  ${tw`px-4 py-0 md:px-8 py-2 md:py-3 w-full z-10`}
  background-color:#211c42;
`

const Div = styled.div`
  ${tw`mx-auto flex`}
`

export default Header
