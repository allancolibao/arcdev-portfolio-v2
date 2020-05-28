import React from "react"
import styled from "@emotion/styled"

import Instagram from "../images/svgs/instagram.svg";
import Twitter from "../images/svgs/twitter.svg";
import Behance from "../images/svgs/behance.svg";
import Github from "../images/svgs/github.svg";
import LinkedIn from "../images/svgs/linked-in.svg";

const SocialIcon = () => (
    <>
        <Link href="https://www.instagram.com/allancolibao" target="blank">
            <Instagram className="inline-block w-8 md:w-16 px-1 md:px-3 lg:px-2 h-auto" />
        </Link>
        <Link href="https://twitter.com/allancolibao" target="blank">
            <Twitter className="inline-block w-8 md:w-16 px-1 md:px-3 lg:px-2 h-auto" />
        </Link>
        <Link href="https://www.behance.net/arcolibao" target="blank">
            <Behance className="inline-block w-8 md:w-16 px-1 md:px-3 lg:px-2 h-auto" />
        </Link>
        <Link href="https://github.com/allancolibao" target="blank">
            <Github className="inline-block w-8 md:w-16 px-1 md:px-3 lg:px-2 h-auto" />
        </Link>
        <Link href="https://www.linkedin.com/in/allan-colibao-635902151" target="blank">
            <LinkedIn className="inline-block w-8 md:w-16 px-1 md:px-3 lg:px-2 h-auto" />
        </Link>
    </>
)


const Link = styled.a`
    &:hover {
        filter: invert(27%) saturate(600%) hue-rotate(346deg);
    }
`

export default SocialIcon