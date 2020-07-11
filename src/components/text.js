import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro'

const SectionTitle = ({text, layout}) => <Title className={layout}  
                                                data-sal="slide-right"
                                                data-sal-duration="900"
                                                data-sal-delay="300"
                                                data-sal-easing="ease">
                                            {text}
                                        </Title>

const Heading = ({text, layout}) => <Head className={layout}>{text}</Head>

const BlkHeading = ({text, layout}) => <BlkHead className={layout}>{text}</BlkHead>

const SubHeading = ({text, layout}) => <SubHead className={layout}>{text}</SubHead>

const Content = ({text, layout}) => <Paragraph className={layout}>{text}</Paragraph>

const Tagging = ({text, layout}) => <Tag className={layout}>{text}</Tag>

const LinkText = ({text, layout}) => <Label className={layout}>{text}</Label>

const Title = styled.h2`
    ${tw`text-lg md:text-2xl lg:text-4xl font-bold`}
    color: #ab7dff;
`

const Head = styled.h5`
    ${tw`text-sm md:text-xl lg:text-2xl font-semibold`}
    color: #9354e8;
`

const BlkHead = styled.h5`
    ${tw`text-sm md:text-xl lg:text-2xl font-semibold`}
    color: #d4d4d4;
`

const SubHead = styled.h6`
    ${tw`text-xs md:text-sm lg:text-base font-semibold`}
    color: #dabfff;
`

const Paragraph = styled.p`
    ${tw`text-xs md:text-sm lg:text-base font-normal leading-relaxed`}
    color: #d4d4d4;
`

const Tag = styled.small`
    ${tw`text-xs md:text-sm font-thin md:font-light px-3 bg-purple-400 text-white rounded border-solid border border-purple-600`}
`

const Label = styled.h6`
    ${tw`text-xs md:text-sm lg:text-base italic text-purple-300`}
`

export {
    SectionTitle,
    Heading,
    BlkHeading,
    SubHeading,
    Content,
    Tagging,
    LinkText
}