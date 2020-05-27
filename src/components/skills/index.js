import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import { SectionTitle, Heading, Content } from "../text"
import Star from "./star"

const Skills = ({stacks, tools}) => (
    <Section id="skills">
        <SectionTitle layout="pb-4 md:pb-10" text="Skills"/>
        <SectionContent>
            <div className="w-full md:w-1/2 mb-4 lg:mb-0">
                <Heading layout="pb-1 md:pb-2" text="My Tech Stack"/>
                {stacks ? stacks.map((stack, i) =>  
                    <Item key={i}>
                        <Content layout="w-32"  text={stack.name}/>
                        <Rating>
                            <Star count={10} rating={stack.value}/>
                        </Rating>
                    </Item>) : 
                    <Item>
                        <Content layout="w-32"  text="Loading..."/>
                        <Rating>
                            <Star count={10} rating={0}/>
                        </Rating>
                    </Item>
                }
            </div>
            <div className="w-full md:w-1/2">
                <Heading layout="pb-1 md:pb-2" text="Design & Editing Tools"/>
                {tools ? tools.map((tool, i) =>  
                    <Item key={i}>
                        <Content layout="md:w-32"  text={tool.name}/>
                        <Rating>
                            <Star count={10} rating={tool.value}/>
                        </Rating>
                    </Item>) : 
                    <Item>
                        <Content layout="md:w-32"  text="Loading..."/>
                        <Rating>
                            <Star count={10} rating={0}/>
                        </Rating>
                    </Item>
                }
            </div>
        </SectionContent>
    </Section>
)

const Section = styled.section`
    ${tw`mb-12 lg:mb-20`}
`

const SectionContent = styled.div`
    ${tw`block lg:flex`}
`
const Item = styled.div`
    ${tw`block lg:flex items-center pb-2`}
`

const Rating = styled.div`
    ${tw`flex items-center`}
`


export default Skills