import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import { SectionTitle, BlkHeading, Content, Tagging, LinkText } from "../text"
import Eye from "../../images/svgs/eye.svg"
import Git from "../../images/svgs/git.svg"
import Loader from "../loader"

const Project = ({projects}) => (
    <Section id="projects">
        <SectionTitle layout="pb-4 md:pb-10" text="Projects"/>
        <SectionContent>
            <Grid>
                {projects ? projects.map((project, i) => 
                <Card key={i}>
                    <BlkHeading layout="mb-2" text={project.title}/>
                    <Content layout="mb-4" text={project.description}/>
                    {project.tags.map((tag, i) =>
                        <div key={i} className="inline-block">
                            <Tagging  layout="mr-1 md:mr-2 w-8" text={tag}/>
                        </div>
                    )}
                    <View>
                        <Align href={project.url} target="blank">
                            <Eye className="h-auto w-6 md:w-8 mr-1"/> 
                            <LinkText text="See live"/>
                        </Align>
                        <Align href={project.repo} target="blank">
                            <Git className=" h-auto w-6 md:w-8 mr-1"/> 
                            <LinkText text="View repository"/>
                        </Align>
                    </View>
                </Card>
                ) : <Loader />
            }
            </Grid>
        </SectionContent>
    </Section>
)


const Section = styled.section`
    ${tw`mb-12 lg:mb-20`}
`

const SectionContent = styled.div`
    ${tw`flex flex-wrap`}
`

const Grid = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 lg:gap-8`}
`

const Card = styled.div`
    ${tw`relative overflow-hidden p-4 md:p-6 shadow-lg md:shadow-xl rounded-lg `}
    min-height: 320px;
`

const View = styled.div`
    ${tw`absolute flex justify-center w-full bottom-0 mb-4`}
`

const Align = styled.a`
    ${tw`flex items-center mr-12`}
    &:hover {
        filter: invert(27%) saturate(600%) hue-rotate(346deg);
        cursor:pointer
    }
`

export default Project