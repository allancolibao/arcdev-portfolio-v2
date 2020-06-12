import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Link from "./link"

const Navigation = ({ lists }) => (
    <NavList>
        {lists.map((list, index) => <Link
            to={list.link}
            name={list.name}
            key={index}
        />)}
    </NavList>
    
)

const NavList = styled.div`
    ${tw`hidden lg:flex items-center`}
`

export default Navigation