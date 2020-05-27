import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import { SectionTitle, Heading, SubHeading, Content } from "../text"

import Human from "../../images/svgs/human.svg";
import Marker from "../../images/svgs/marker.svg";
import Mail from "../../images/svgs/mail.svg";
import Phone from "../../images/svgs/phone.svg";

const About = () => (
    <Section id="about">
        <SectionTitle layout="pb-4 md:pb-10" text="About me"/>
        <SectionContent>
            <div className="w-full xl:w-3/4">
                <Heading layout="pb-1 md:pb-2" text="Who Am I"/>
                <Content layout="pb-4 md:pb-6" text="Simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It has 
                survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged."/>

                <Content layout="pb-4 md:pb-6" text="The is simply dummy text of the printing and 
                typesetting  industry. LoremIpsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially 
                unchanged."/>

                <Content layout="pb-6 md:pb-10" text="Simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book."/>

                <Heading layout="pb-1 md:pb-2" text="Work Experience"/>
                <SubHeading layout="pb-1 md:pb-2" text="Project Assistant III (Web Developer)"/>
                <Content text="2019 - Present"/>
                <Content layout="pb-6 md:pb-10" text="Department of Science and Technology - 
                Food and Nutrition Research Institute"/>

                <Heading layout="pb-1 md:pb-2" text="Education"/>
                <SubHeading layout="pb-1 md:pb-2" text="Electronics and Computer Engineering Technology"/>
                <Content text="2010 - 2013"/>
                <Content layout="pb-6 md:pb-10" text="Computer Systems Technological College, Inc."/>

                <ContactInfo>
                    <Marker className="inline-block w-4 md:w-6 h-auto mr-1 md:mr-2"/> 
                    <Content layout="inline-block" text="Manila, Philippines"/>
                </ContactInfo>
                <ContactInfo>
                    <Mail className="inline-block w-4 md:w-6 h-auto mr-1 md:mr-2"/> 
                    <Content layout="inline-block" text="colibaoallanreyes@gmail.com"/>
                </ContactInfo>
                <ContactInfo>
                    <Phone className="inline-block w-4 md:w-6 h-auto mr-1 md:mr-2"/> 
                    <Content layout="inline-block" text="09667981133"/>
                </ContactInfo>
            </div>
            <div className="hidden xl:block xl:w-1/4">
                <Human />
            </div>
        </SectionContent>
    </Section>
)


const Section = styled.section`
    ${tw`mb-12 lg:mb-20`}
`

const SectionContent = styled.div`
    ${tw`flex`}
`

const ContactInfo = styled.div`
    ${tw`flex items-center py-1 lg:py-2`}
`

export default About