import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import { SectionTitle, BlkHeading, Content, PostedDate} from "../text"
import Bookmark from "../../images/svgs/bookmark.svg"


const Blogs = ({blogs}) => (
    <Section id="blog">
        <SectionTitle layout="pb-6 md:pb-8 lg:pb-10" text="My Blog"/>
        <SectionContent
            data-sal="fade"
            data-sal-duration="900"
            data-sal-delay="300"
            data-sal-easing="ease">
            <Grid>
                {blogs ? blogs.map((blog, i) => 
                    <Card key={i}>
                        <Bookmark className="hidden lg:block absolute top-0 left-0 w-16 lg:w-20 xl:w-24 h-auto"/>
                        <BlkHeading layout="mb-1 md:mb-2" text={blog.title}/>
                        <Content layout="mb-4" text={blog.description}/>
                        <PostedDate text={blog.date_posted} />
                        <View>
                            <Link to={`/${blog.slug}`}>
                                <ReadMore>Read more</ReadMore>
                            </Link>
                        </View>
                    </Card>
                    ) : ""
                }
            </Grid>
        </SectionContent>
    </Section>
)


const Section = styled.section`
    ${tw`mb-8 md:mb-10 lg:mb-20 pt-16 md:pt-20`}
`

const SectionContent = styled.div`
    ${tw`flex flex-wrap`}
`

const Grid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6`}
`

const Card = styled.div`
    ${tw`relative 
    overflow-hidden 
    px-3 
    md:px-4 
    lg:pl-20 
    xl:pl-24 
    lg:pr-5 
    py-3 
    md:py-4 
    lg:py-5 
    shadow-lg 
    md:shadow-xl 
    bg-purple-900`}
    min-height: 320px;
`

const View = styled.div`
    ${tw`absolute 
    flex 
    right-0 
    bottom-0 
    mb-3 
    md:mb-5 
    lg:mb-6 
    mr-3 
    md:mr-5 
    lg:mr-6`}
`

const ReadMore = styled.button`
    ${tw`bg-transparent 
        text-purple-400
        text-xs
        lg:text-xs 
        xl:text-base 
        font-semibold 
        py-1
        px-2
        md:py-1 
        md:px-3 
        border 
        rounded 
        border-purple-400 
        transition 
        duration-500 
        ease-in-out 
        transform 
        focus:outline-none
        hover:border-transparent 
        hover:bg-purple-500 
        hover:text-gray-200`}
`

export default Blogs