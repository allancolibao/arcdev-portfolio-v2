import React, {useState} from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { keyframes } from '@emotion/core'

import { SectionTitle, Content, PostedDate, GithubCount} from "../text"
import StartLine from "../../images/svgs/star-line.svg";
import Code from "../../images/svgs/code.svg";
import Fork from "../../images/svgs/fork.svg";
import Book from "../../images/svgs/book.svg";

const Repository = ({repos}) => {
    
    const [show, setShow] =  useState(9)
    const [expanded, setExpanded ] =  useState(false)

    const ShowAllRepos = () => 
        (show === 9 ) ? (
            setShow(repos.length),
            setExpanded(true)
         ) : (
            setShow(9),
            setExpanded(false)
         )          
    
    return( 
    <Section id="repository">
        <SectionTitle layout="pb-6 md:pb-8 lg:pb-10" text="GitHub Repositories"/>
        <SectionContent 
            data-sal="fade"
            data-sal-duration="900"
            data-sal-delay="300"
            data-sal-easing="ease">
                <Grid>
                    {repos ? repos.filter(repo => repo.language !== null).slice(0, show).map((repo, i) => 
                    <RepoLink href={repo.html_url} target="blank" key={i}>
                        <Card>
                            <Align>
                                <Book  className="w-8 mr-2 h-auto"/>
                                <Content layout="mb-4" text={repo.name}/>
                            </Align>
                            <PostedDate text={repo.description} />
                            <View>
                                <Align>
                                    <Code  className="w-5 h-auto" />
                                    <GithubCount layout="ml-1 md:ml-2" text={repo.language} />
                                </Align>
                                <Align>
                                    <StartLine  className="w-5 h-auto" />
                                    <GithubCount layout="ml-1 md:ml-2" text={repo.stargazers_count} />
                                </Align>
                                <Align>
                                    <Fork  className="w-5 h-auto" />
                                    <GithubCount layout="ml-1 md:ml-2" text={repo.forks_count} />
                                </Align>
                            </View>
                        </Card>
                    </RepoLink>
                    ) : ""
                    }
                </Grid>
        </SectionContent>
        <div className="w-full flex mt-6">
        <ShowMoreBtn onClick={ShowAllRepos}>
            {expanded ? 'Show less' : 'Show more'}
        </ShowMoreBtn>
        </div>
    </Section>
    )

}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -5%, 0);
    transform: translate3d(0, -5%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`

const Section = styled.section`
    ${tw`mb-8 md:mb-10 lg:mb-20 pt-16 md:pt-20`}
`

const SectionContent = styled.div`
    ${tw`block md:flex`}
`

const Grid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6`}
`

const Card = styled.div`
    ${tw`relative 
    overflow-hidden 
    p-3 md:p-5 
    lg:p-6 
    shadow-lg 
    md:shadow-xl 
    border 
    border-purple-900 
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:scale-105`}
    min-height: 200px;
`

const View = styled.div`
    ${tw`absolute flex justify-center w-full bottom-0 mb-4`}
`

const Align = styled.div`
    ${tw`flex items-center mr-6 md:mr-12`}
    &:hover {
        filter: invert(20%) saturate(300%) hue-rotate(346deg);
        cursor:pointer;
    }
`
const RepoLink = styled.a`
    opacity: 0;
    animation: ${fadeIn} ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    text-decoration:none;
`

const ShowMoreBtn = styled.button`
    ${tw`
        bg-transparent 
        text-purple-500
        text-xs
        md:text-base 
        font-semibold 
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:text-purple-300 
        focus:outline-none
        mx-auto`}
`

export default Repository