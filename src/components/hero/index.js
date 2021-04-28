import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Human from "../../images/svgs/human.svg"

const Hero = () => (
  <Section id="home">
    <StyledDiv>
      <SubHeading
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        Hi, I'm
      </SubHeading>
      <Heading
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-delay="500"
        data-sal-easing="ease"
        className="text-purple-500"
      >
        Allan Reyes Colibao
      </Heading>
      <Heading
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-delay="500"
        data-sal-easing="ease"
        className="text-gray-500"
      >
        Front-end Developer
      </Heading>
      <Text
        data-sal="slide-up"
        data-sal-duration="900"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        Designing and developing modern web applications. Check out my{" "}
        <Link href="#projects">featured work</Link> and{" "}
        <Link href="#blog">blog</Link>.
      </Text>
    </StyledDiv>
    <StyledDiv className="hidden xl:block">
      <Human
        data-sal="fade"
        data-sal-duration="900"
        data-sal-delay="600"
        data-sal-easing="ease"
        className="mt-12"
      />
    </StyledDiv>
  </Section>
)

const Section = styled.section`
  ${tw`flex items-center justify-center h-screen`}
`

const StyledDiv = styled.div`
  ${tw`flex-1`}
`

const Heading = styled.h1`
  ${tw`text-3xl md:text-4xl lg:text-5xl font-black`}
`

const SubHeading = styled.p`
  ${tw`text-lg md:text-xl lg:text-2xl font-normal py-2 md:py-3 lg:py-5`}
  color: #e3e3e3;
`
const Text = styled.p`
  ${tw`text-sm md:text-base lg:text-lg font-thin py-2 md:py-3 lg:py-5 leading-loose`}
  color: #cfcfcf;
`

const Link = styled.a`
  ${tw`text-purple-300 font-bold hover:text-purple-200`}
  background: linear-gradient(180deg,
        rgba(255, 255, 255, 0) 60%,
        #8f4fe8 40%);
`

export default Hero
