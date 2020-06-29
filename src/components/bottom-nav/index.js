import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Home from "../../images/svgs/home.svg";
import About from "../../images/svgs/about.svg";
import Skills from "../../images/svgs/skill.svg";
import Projects from "../../images/svgs/project.svg";
import Blogs from "../../images/svgs/form.svg";

const BottomNavigation = () => (
    <NavList>
        <MenuLink>
            <Link href="#home">
                <Home className="h-auto w-6 md:w-8 mx-auto"/>
                Home
            </Link>
        </MenuLink>
        <MenuLink>
            <Link href="#about">
                <About className="h-auto w-6 md:w-8 mx-auto" />
                About
            </Link>
        </MenuLink>
        <MenuLink>
            <Link href="#skills">
                <Skills className="h-auto w-6 md:w-8 mx-auto" />
                Skills
            </Link>
        </MenuLink>
        <MenuLink>
            <Link href="#projects">
                <Projects className="h-auto w-6 md:w-8 mx-auto" />
                Projects
            </Link>
        </MenuLink>
        <MenuLink>
            <Link href="#blog">
                <Blogs className="h-auto w-6 md:w-8 mx-auto" />
                Blogs
            </Link>
        </MenuLink>
    </NavList>
)

const NavList = styled.div`
    ${tw`flex 
        items-center 
        justify-between 
        fixed 
        border-t 
        border-gray-400 
        bottom-0 
        w-full 
        z-30 
        bg-white 
        py-1 
        md:py-3 
        px-2 
        md:px-6 
        lg:hidden 
        shadow`}
`

const MenuLink = styled.div`
    ${tw`inline-block 
        font-normal 
        md:font-medium 
        text-xs 
        md:text-base`}
`

const Link = styled.a`
    ${tw`focus:text-purple-600 hover:text-purple-600`}
    color: #9B9B9B
`

export default BottomNavigation