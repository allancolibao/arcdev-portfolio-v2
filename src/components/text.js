import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

const SectionTitle = ({text, layout}) => 
    <Title className={layout}  
        data-sal="slide-right"
        data-sal-duration="900"
        data-sal-delay="300"
        data-sal-easing="ease">
    {text}
    </Title>

const Heading = ({text, layout}) => 
    <Head className={layout}>{text}</Head>

const BlkHeading = ({text, layout}) => 
    <BlkHead className={layout}>{text}</BlkHead>

const SubHeading = ({text, layout}) => 
    <SubHead className={layout}>{text}</SubHead>

const Content = ({text, layout}) => 
    <Paragraph className={layout}>{text}</Paragraph>

const Tagging = ({text, layout}) => 
    <Tag className={layout}>{text}</Tag>

const LinkText = ({text, layout}) => 
    <Label className={layout}>{text}</Label>

const PostedDate = ({text, layout}) => 
    <Date className={layout}>{text}</Date>

const GithubCount = ({text, layout}) => 
    <Count className={layout}>{text}</Count>

const Title = styled.h2`
    ${tw`text-lg md:text-2xl lg:text-4xl font-bold`}
    color: #ab7dff;
`

const Head = styled.h5`
    ${tw`text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold`}
    color: #a367f5;
`

const BlkHead = styled.h5`
    ${tw`text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold`}
    color: #e3e3e3;
`

const SubHead = styled.h6`
    ${tw`text-xs md:text-sm lg:text-base font-medium`}
    color: #baabff;
`

const Paragraph = styled.p`
    ${tw`text-xs lg:text-sm xl:text-base font-normal leading-relaxed`}
    color: #cfcfcf;
`

const Tag = styled.small`
    ${tw`text-xs md:text-sm font-thin md:font-light px-3 bg-purple-500 text-gray-200 rounded-sm`}
`

const Label = styled.h6`
    ${tw`text-xs md:text-sm lg:text-base italic text-purple-300`}
`

const Date = styled.p`
    ${tw`text-xs lg:text-sm font-thin md:font-light text-gray-500`}
`

const Count = styled.small`
    ${tw`text-xs md:text-sm font-thin md:font-light text-gray-600`}
`

export {
    SectionTitle,
    Heading,
    BlkHeading,
    SubHeading,
    Content,
    Tagging,
    LinkText,
    PostedDate,
    GithubCount
}