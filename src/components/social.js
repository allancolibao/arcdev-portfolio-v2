import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Instagram from "../images/svgs/instagram.svg";
import Twitter from "../images/svgs/twitter.svg";
import Behance from "../images/svgs/behance.svg";
import Github from "../images/svgs/github.svg";
import LinkedIn from "../images/svgs/linked-in.svg";

const SocialIcon = () => (
    <Social data-sal="slide-right"
            data-sal-duration="900"
            data-sal-delay="600"
            data-sal-easing="ease"
    >
        <a href="https://www.instagram.com/allancolibao" target="blank">
            <Instagram className={socialIcon.style} />
        </a>
        <a href="https://twitter.com/allancolibao" target="blank">
            <Twitter className={socialIcon.style} />
        </a>
        <a href="https://www.behance.net/arcolibao" target="blank">
            <Behance className={socialIcon.style} />
        </a>
        <a href="https://github.com/allancolibao" target="blank">
            <Github className={socialIcon.style} />
        </a>
        <a href="https://www.linkedin.com/in/allan-colibao-635902151" target="blank">
            <LinkedIn className={socialIcon.style} />
        </a>
    </Social>
)

const Social = styled.div`
    ${tw`relative lg:fixed lg:left-0 lg:bottom-0 lg:mb-6 lg:ml-2 lg:z-20 mx-auto`}
`

const socialIcon = {
    style: "inline-block lg:block w-10 md:w-12 px-1 md:px-2 my-3 h-auto text-purple-600 transition duration-500 ease-in-out transform hover:scale-125 hover:text-purple-400"
}

export default SocialIcon