import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import { SectionTitle, BlkHeading, Content} from "../text"
import Bookmark from "../../images/svgs/bookmark.svg"


const Blogs = ({blogs}) => (
    <Section id="blog">
        <SectionTitle layout="pb-4 md:pb-6 lg:pb-10" text="My Blog"/>
        <SectionContent
            data-sal="fade"
            data-sal-duration="900"
            data-sal-delay="300"
            data-sal-easing="ease">
            <Grid>
                {blogs ? blogs.map((blog, i) => 
                    <Card key={i}>
                        <Bookmark className="absolute top-0 left-0 w-16 md:w-24 h-auto"/>
                        <BlkHeading layout="mb-1 md:mb-2" text={blog.title}/>
                        <Content layout="mb-4" text={blog.description}/>
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
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 lg:gap-8`}
`

const Card = styled.div`
    ${tw`relative overflow-hidden pl-16 md:pl-24 pr-3 md:pr-5 lg:pr-6 py-3 md:py-5 lg:py-6 shadow-lg md:shadow-xl rounded-lg bg-purple-900`}
    min-height: 320px;
`

const View = styled.div`
    ${tw`absolute flex right-0 bottom-0 mb-6 mr-6`}
`

const ReadMore = styled.button`
    ${tw`bg-transparent 
        text-purple-600
        text-xs
        md:text-base 
        font-semibold 
        hover:text-white 
        py-1
        px-2
        md:py-1 
        md:px-3 
        border 
        border-purple-600 
        hover:border-transparent 
        rounded 
        hover:bg-purple-500 
        hover:text-white 
        hover:font-medium`}
`

export default Blogs