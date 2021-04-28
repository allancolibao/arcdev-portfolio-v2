import React from "react"
import { graphql } from "gatsby"
import { BlogList } from "../utils/data"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Link } from "gatsby"
import { keyframes } from "@emotion/core"

import { isBrowser } from "../utils/browser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/about/image"
import Skeleton from "../components/skeleton"
import SocialIcon from "../components/social"
import Loader from "../components/loader"

const Template = ({ data, location }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const [blogs, isLoading] = BlogList()

  const goBack = () => {
    window.history.back()
  }

  if (!isBrowser()) {
    return <Loader />
  }

  return (
    <Layout location={location}>
      {blogs ? null : <Loader />}
      <SEO
        title="Blog | Allan Colibao - Front-end Developer"
        isBlogPost
        frontmatter={frontmatter}
      />
      <BackButton onClick={() => goBack()}>{"<< Go back"}</BackButton>
      <div className="blog-post-container">
        <div className="blog-post block lg:flex">
          <div className="w-full lg:w-1/4 lg:pr-8">
            <div className="block lg:flex items-center justify-center  p-2 mb-4 lg:mb-0">
              <div className="w-full lg:w-1/4 lg:mr-4">
                <Image layout="mx-auto mb-2 lg:mb-0 w-12 md:w-16 lg:w-auto shadow-lg border rounded-full border-gray-100" />
              </div>
              <div className="w-full lg:w-3/4 text-center lg:text-left">
                <h1 className="text-gray-100 text-xs xl:text-base font-normal">
                  Allan Reyes Colibao
                </h1>
                <h2 className="text-purple-200 text-xs xl:text-sm font-light">
                  @allancolibao
                </h2>
              </div>
            </div>
            <SideBar>
              <SideBarMoreArticlesHeading>
                More Articles
              </SideBarMoreArticlesHeading>
              <ul className="list-none">
                {isLoading
                  ? new Array(4).fill(1).map((_, i) => {
                      return (
                        <div className="py-4 px-2" key={i}>
                          <li className="m-0">
                            <Skeleton count={1} layout="h-4 rounded-sm" />
                          </li>
                          <small className="text-gray-500">
                            <Skeleton count={2} layout="h-1 rounded-sm" />
                          </small>
                        </div>
                      )
                    })
                  : blogs.map((blog, i) => (
                      <Link
                        key={i}
                        to={`/${blog.slug}`}
                        className="hover:text-white"
                      >
                        <SideBarBlogList>
                          <li className="m-0">{blog.title}</li>
                          <small className="text-gray-500">
                            {blog.date_posted}
                          </small>
                        </SideBarBlogList>
                      </Link>
                    ))}
              </ul>
            </SideBar>
          </div>
          <MainSection dangerouslySetInnerHTML={{ __html: html }}></MainSection>
        </div>
      </div>
      <MoreArticles>
        <MoreArticlesHeading>More Articles</MoreArticlesHeading>
        <ul className="list-none">
          {!isLoading
            ? blogs.map((blog, i) => (
                <Link key={i} to={`/${blog.slug}`} className="hover:text-white">
                  <div className="py-4 border-b border-gray-600">
                    <li className="m-0">{blog.title}</li>
                    <small className="text-gray-500">{blog.date_posted}</small>
                  </div>
                </Link>
              ))
            : null}
        </ul>
      </MoreArticles>
      <div className="flex mx-auto">
        <SocialIcon />
      </div>
    </Layout>
  )
}

const size = {
  laptop: "1024px",
}

export const device = {
  laptop: `(min-width: ${size.laptop})`,
}

const fadeIn = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`

const SideBar = styled.div`
  ${tw`text-gray-400 
      hidden
      lg:block
      mt-4 
      text-xs 
      lg:overflow-y-scroll`}
  height: 25rem;
`

const SideBarBlogList = styled.div`
    ${tw`py-4 px-2`}
    animation: ${fadeIn} 
    2s;
`

const MainSection = styled.div`
    ${tw`w-full lg:w-3/4 lg:overflow-y-scroll lg:pr-8`}
    @media ${device.laptop} { 
      height: 48rem;
    }   
`

const BackButton = styled.button`
  ${tw`mt-16 mb-4 
      text-purple-400 
      text-sm
      md:text-base
      font-normal 
      focus:outline-none 
      hover:text-purple-500`}
`

const MoreArticles = styled.div`
  ${tw`block 
      lg:hidden 
      text-gray-400 
      text-xs 
      md:text-sm 
      my-10`}
`
const MoreArticlesHeading = styled.h1`
  ${tw`text-xl 
      md:text-2xl 
      font-black 
      text-purple-400 
      leading-tight 
      mb-4`}
`

const SideBarMoreArticlesHeading = styled.h1`
  ${tw`px-2
      text-lg
      font-black 
      text-purple-400 
      leading-tight 
      mb-4`}
`

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`

export default Template
