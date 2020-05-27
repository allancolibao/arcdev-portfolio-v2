import React from 'react';
import styled from "@emotion/styled"
import tw from 'twin.macro'

import SocialIcon from "../social"
import SlantBackground from "../../images/svgs/slant-bg.svg"

const Footer = () => (
    <Section>
        <SlantBackground className="w-full h-auto z-0" />
        <SectionContent>
            <WhiteIcon>
                <SocialIcon />
            </WhiteIcon>
            <Text>@arcdev</Text>
        </SectionContent>
    </Section>
)

const Section = styled.section`
    ${tw`bg-no-repeat relative`}
`

const SectionContent = styled.div`
    ${tw`flex 
        justify-center 
        absolute 
        w-full 
        m-auto 
        bottom-0
        mb-1
        md:mb-4
        z-20`}
`

const WhiteIcon = styled.div`
    ${tw`mb-6 md:mb-10`}
    filter: brightness(0) invert(1);
`

const Text = styled.div`
    ${tw`
    font-normal 
    lg:font-medium 
    tracking-wider
    text-sm
    md:text-xl 
    lg:text-2xl 
    text-purple-200 
    absolute 
    flex 
    justify-center 
    bottom-0 
    mx-auto 
    z-20`}
`

export default Footer