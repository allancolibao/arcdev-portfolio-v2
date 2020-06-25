import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { withPrefix } from "gatsby"

import styled from "@emotion/styled"
import tw from 'twin.macro'

import Envelope from "../../images/svgs/envelope.svg";
import Close from "../../images/svgs/close.svg";

const MessageButton = ({ location }) => {

    const isContactPage = location.pathname === withPrefix("/contact")

    return (
        <>
        {isContactPage ? 
        <AniLink cover bg="#6f36bc" direction="right" duration={1} to="/">
            <CloseButton><Close className="w-full h-auto p-2"/></CloseButton>
        </AniLink>
        :
        <AniLink cover bg="#6f36bc" direction="left" duration={1} to="/contact">
            <Button><Envelope className="w-full h-auto p-2"/></Button>
        </AniLink> 
        }
       </>
    )    
}

const Button = styled.button`
    ${tw`fixed
        rounded-full
        h-10
        w-10 
        md:h-12 
        md:w-12 
        bg-purple-600  
        bottom-0 
        shadow-xl
        mb-16
        mr-4
        md:mr-8
        md:mb-24
        lg:mb-10 
        lg:mr-24 
        right-0 
        z-30 
        focus:outline-none 
        hover:bg-purple-700`}
`

const CloseButton = styled.button`
    ${tw`fixed
        rounded-full 
        h-10
        w-10 
        md:h-12 
        md:w-12 
        bg-white  
        bottom-0 
        shadow-xl 
        mb-16
        mr-4
        md:mr-8
        md:mb-24
        lg:mb-10 
        lg:mr-24
        right-0 
        z-30 
        focus:outline-none 
        hover:bg-gray-200`}
`

export default MessageButton