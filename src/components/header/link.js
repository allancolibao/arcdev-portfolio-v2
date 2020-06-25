import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

const Link = ({name, to}) => (
    <MenuLink href={to}>
       {name}
    </MenuLink>
)

const MenuLink = styled.a`
    ${tw`inline-block mr-12 font-medium text-base`}
    color: #606060
`

export default Link