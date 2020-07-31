import React from "react"
import { graphql } from "gatsby"
import { BlogList } from "../utils/data"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { Link } from "gatsby"
import { keyframes } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/about/image"
import Skeleton from "../components/skeleton"

const Template = ({data, location}) => {

  const { markdownRemark } = data
  const { html } = markdownRemark
  const [ blogs, isLoading ] = BlogList()

  const goBack = () => {
    window.history.back()
  }
  
  return (
    <Layout location={location}>
       <SEO title="Blog" bodyBackground="#211c42"/>
       <BackButton onClick={() => goBack()} >{"<< Go back"}</BackButton>
        <div className="blog-post-container">
            <div className="blog-post flex">
                <div className="w-1/4 pr-8">
                    <div className="flex items-center justify-center bg-gray-600 p-2">
                        <div className="w-1/4 mr-4">
                          <Image layout="shadow-lg border rounded-full border-gray-100"/>
                        </div>
                        <div className="w-3/4">
                          <h1 className="text-gray-100 text-base font-normal">Allan Reyes Colibao</h1>
                          <h2 className="text-purple-200 text-sm font-light">@allancolibao</h2>
                        </div>
                    </div>
                    <SideBar className="">
                      <ul className="list-none">
                      {isLoading ? new Array(4).fill(1).map((_, i) => {
                          return  ( 
                            <div className="p-4" key={i}>
                              <li className="m-0">
                                <Skeleton count={1} layout="h-4 rounded-sm"/>
                              </li>
                              <small className="text-gray-500">
                                <Skeleton count={2} layout="h-1 rounded-sm"/>
                              </small>
                            </div>
                          )
                        }) : blogs.map((blog, i) => 
                          <Link key={i} to={`/${blog.slug}`} className="hover:text-white">
                            <SideBarBlogList className="p-4">
                              <li className="m-0">{blog.title}</li>
                              <small className="text-gray-500">{blog.date_posted}</small>
                            </SideBarBlogList>
                          </Link>
                        )
                      }
                      </ul>
                    </SideBar>
                </div>
                <div
                    className="blog-post-content w-3/4"
                    dangerouslySetInnerHTML={{ __html: html }}
                >
                </div>
            </div>
        </div>
    </Layout>
  )
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
      mt-4 
      text-xs 
      shadow-lg 
      bg-purple-900`}
`

const SideBarBlogList = styled.div`
    ${tw`p-4`}
    animation: ${fadeIn} 
    2s;
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

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`

export default Template