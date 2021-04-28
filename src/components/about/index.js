import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import { SectionTitle, Heading, SubHeading, Content } from "../text"

import Image from "./image"
import Marker from "../../images/svgs/marker.svg"
import Mail from "../../images/svgs/mail.svg"
import Phone from "../../images/svgs/phone.svg"

const About = () => (
  <Section id="about">
    <SectionTitle layout="pb-6 md:pb-8 lg:pb-10" text="About me" />
    <SectionContent>
      <div
        className="w-full xl:w-1/2 pr-0 lg:pr-12 xl:pr-16"
        data-sal="fade"
        data-sal-duration="900"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <Heading layout="pb-1 md:pb-2" text="Hello There!" />
        <Content
          layout="pb-3 md:pb-4 lg:pb-6"
          text="My name is Allan Reyes Colibao. I am a design-oriented Front-end Developer 
                who loves to build modern web applications."
        />

        <Content
          layout="pb-3 md:pb-4 lg:pb-6"
          text="Earlier in 2019,  I started working as a Web Developer. And as part of my role, 
                I was involved in the development of applications providing efficient and effective means 
                of data collection and management using technologies JavaScript and PHP."
        />

        <Content
          layout="pb-4 md:pb-6 lg:pb-10"
          text="Now, I focus on front-end stuff because I love to combine art and efficient code in 
                building a product. If you are interested in working on a project together, don't hesitate to get in touch."
        />

        <Heading layout="pb-1 md:pb-2" text="Experience" />

        <SubHeading layout="pb-1 md:pb-2" text="Full-stack Developer" />
        <Content text="Jan 2021 - Present" />
        <Content
          layout="pb-4 md:pb-6 lg:pb-10"
          text="Gigaddel Online Solutions"
        />

        <SubHeading layout="pb-1 md:pb-2" text="Web Developer" />
        <Content text="Aug 2020 - Present" />
        <Content
          layout="pb-4 md:pb-6 lg:pb-10"
          text="LandBank of the Philippines Resources 
                Development Corporation"
        />

        <SubHeading layout="pb-1 md:pb-2" text="Web Developer" />
        <Content text="Jul 2019 - Jul 2020" />
        <Content
          layout="pb-4 md:pb-6 lg:pb-10"
          text="Department of Science and Technology - 
                Food and Nutrition Research Institute"
        />

        <Heading layout="pb-1 md:pb-2" text="Education" />
        <SubHeading
          layout="pb-1 md:pb-2"
          text="Electronics and Computer Engineering Technology"
        />
        <Content text="2010 - 2013" />
        <Content
          layout="pb-4 md:pb-6 lg:pb-10"
          text="College of Sciences, Technology and Communications, Inc."
        />
      </div>
      <div className="w-full xl:w-1/2">
        <div
          data-sal="fade"
          data-sal-duration="900"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="hidden lg:block"
        >
          <Image layout="shadow-xl lg:mt-6 xl:mt-10" />
        </div>
        <div
          data-sal="fade"
          data-sal-duration="900"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="mt-0 lg:mt-10"
        >
          <ContactInfo>
            <Marker className="inline-block w-4 md:w-5 lg:w-6 h-auto mr-1 md:mr-2" />
            <Content layout="inline-block" text="Manila, Philippines" />
          </ContactInfo>
          <ContactInfo>
            <Mail className="inline-block w-4 md:w-5 lg:w-6 h-auto mr-1 md:mr-2" />
            <Content layout="inline-block" text="colibaoallanreyes@gmail.com" />
          </ContactInfo>
          <ContactInfo>
            <Phone className="inline-block w-4 md:w-5 lg:w-6 h-auto mr-1 md:mr-2" />
            <Content layout="inline-block" text="+63 966 798 1133" />
          </ContactInfo>
        </div>
      </div>
    </SectionContent>
  </Section>
)

const Section = styled.section`
  ${tw`mb-8 md:mb-10 lg:mb-20 pt-16 md:pt-20`}
`

const SectionContent = styled.div`
  ${tw`block lg:flex`}
`

const ContactInfo = styled.div`
  ${tw`flex items-center py-1 lg:py-2`}
`

export default About
