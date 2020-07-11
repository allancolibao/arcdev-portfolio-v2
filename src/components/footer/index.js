import React from 'react';
import styled from "@emotion/styled"
import tw from 'twin.macro'

import SocialIcon from "../social"

const Footer = () => (
    <Section>
        <SectionContent>
            <div>
                <SocialIcon />
            </div>
            <Text>@arcdev</Text>
        </SectionContent>
    </Section>
)

const Section = styled.section`
    ${tw`mb-16 md:mb-24 lg:mb-0 mt-12 md:mt-16 lg:mt-24`}
`

const SectionContent = styled.div`
    ${tw`flex 
        justify-center 
        w-full 
        mx-auto 
        mb-2
        md:mb-6`}
`

const Text = styled.div`
    ${tw`
    font-normal 
    lg:font-normal 
    tracking-wider
    text-sm
    md:text-xl 
    lg:text-2xl 
    text-purple-200 
    italic
    flex
    justify-center 
    bottom-0 
    mx-auto 
    z-20`}
`

export default Footer