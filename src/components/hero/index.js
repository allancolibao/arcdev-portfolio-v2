import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Image from "./image"
import SocialIcon from "../social"

const Hero = () => (
    <Section>
        <StyledDiv>
            <Image/>
            <SubHeading data-sal="slide-right"
                        data-sal-duration="900"
                        data-sal-delay="500"
                        data-sal-easing="ease"
            >
                Hi, I'm
            </SubHeading>
            <Heading 
                        data-sal="slide-left"
                        data-sal-duration="900"
                        data-sal-delay="500"
                        data-sal-easing="ease"
            >
                Allan Reyes Colibao
            </Heading>
            <SubHeading data-sal="slide-right"
                        data-sal-duration="900"
                        data-sal-delay="500"
                        data-sal-easing="ease"
            >
                Front-end Software Developer
            </SubHeading>
            <SocialIcon />
        </StyledDiv>
    </Section>
)


const Section = styled.section`
    ${tw`flex items-center justify-center text-center h-screen`}
`

const StyledDiv = styled.div`
    ${tw`w-auto my-16`}
`

const Heading = styled.h1`
    ${tw`text-2xl md:text-4xl lg:text-5xl font-bold md:font-black`}
    color: #874cd9;
`

const SubHeading = styled.p`
    ${tw`text-sm md:text-xl lg:text-2xl font-normal py-2 md:py-3 lg:py-5`}
    color: #9b9b9b
`
export default Hero
  