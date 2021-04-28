import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Home from "../../images/svgs/home.svg"
import About from "../../images/svgs/about.svg"
import Repository from "../../images/svgs/repository.svg"
import Projects from "../../images/svgs/project.svg"
import Blogs from "../../images/svgs/form.svg"

const Link = ({ name, to }) => {
  const icon = () => {
    switch (name) {
      case "Home":
        return <Home className={iconStyle.style} />
      case "Projects":
        return <Projects className={iconStyle.style} />
      case "Repository":
        return <Repository className={iconStyle.style} />
      case "Blog":
        return <Blogs className={iconStyle.style} />
      case "About":
        return <About className={iconStyle.style} />
      default:
        return "Icon"
    }
  }

  return (
    <MenuLink
      href={to}
      data-sal="slide-down"
      data-sal-duration="900"
      data-sal-delay="600"
      data-sal-easing="ease"
    >
      {icon()}
    </MenuLink>
  )
}

const MenuLink = styled.a`
  ${tw`inline-block mr-10 font-normal text-sm`}
  color: #d4d4d4;
`

const iconStyle = {
  style: "h-auto w-6 md:w-8 mx-auto",
}

export default Link
