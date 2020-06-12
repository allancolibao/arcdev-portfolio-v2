import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { css, keyframes } from '@emotion/core'

import Navigation from "./navigation"
import Logo from "./logo"
import ToggleSwitch from "../toggleSwitch"


const Header = ({ menuLinks, location, scrolling, isHomepage }) => (
    <Nav  id="home" css={scrolling ? sticky : "" }>
      <Div>
        <Logo />
        {isHomepage ? <Navigation lists={menuLinks}/> : "" }
        <div>
          <ToggleSwitch layout="w-6 sm:w-8"/>
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Nav = styled.nav`
  ${tw`flex flex-wrap items-center justify-between px-4 sm:p-1 w-full z-10 bg-white`}
`

const Div = styled.div`
  ${tw`container mx-auto flex`}
`

export default Header
