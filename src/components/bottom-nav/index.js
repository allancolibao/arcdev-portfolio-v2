import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Home from "../../images/svgs/home.svg"
import About from "../../images/svgs/about.svg"
import Repository from "../../images/svgs/repository.svg"
import Projects from "../../images/svgs/project.svg"
import Blogs from "../../images/svgs/form.svg"

const BottomNavigation = () => (
  <NavList>
    <MenuLink>
      <Link href="#home">
        <Home className="h-auto w-8 md:w-10 mx-auto" />
        {/* Home */}
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href="#projects">
        <Projects className="h-auto w-8 md:w-10 mx-auto" />
        {/* Projects */}
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href="#repository">
        <Repository className="h-auto w-8 md:w-10 mx-auto" />
        {/* Repositories */}
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href="#blog">
        <Blogs className="h-auto w-8 md:w-10 mx-auto" />
        {/* Blogs */}
      </Link>
    </MenuLink>
    <MenuLink>
      <Link href="#about">
        <About className="h-auto w-8 md:w-10 mx-auto" />
        {/* About */}
      </Link>
    </MenuLink>
  </NavList>
)

const NavList = styled.div`
  ${tw`flex 
        items-center 
        justify-between 
        fixed
        bottom-0 
        w-full 
        z-30 
        py-4 
        md:py-5 
        px-6 
        md:px-8 
        lg:hidden`}
  background-color:#211c42;
  box-shadow: 0px 36px 55px 2px rgba(0, 0, 0, 0.51);
`

const MenuLink = styled.div`
  ${tw`inline-block 
        font-normal 
        md:font-normal 
        text-xs 
        md:text-sm`}
`

const Link = styled.a`
  ${tw`focus:text-purple-600 hover:text-purple-600`}
  color: #d4d4d4;
`

export default BottomNavigation
