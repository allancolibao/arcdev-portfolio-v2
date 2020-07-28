import React from "react"
import { graphql } from "gatsby"
import { BlogList } from "../utils/data"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/about/image"

const Template = ({data, location}) => {

  const { markdownRemark } = data
  const { html } = markdownRemark
  const [ blogs ] = BlogList();

  const goBack = () => {
    window.history.back();
  }

  console.log(blogs)

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
                    <div className="text-gray-400 mt-4 text-xs shadow-lg bg-purple-900">
                      <ul className="list-none">
                      {blogs ? blogs.map((blog, i) => 
                          <Link key={i} to={`/${blog.slug}`}>
                            <div className="p-4">
                              <li className="m-0">{blog.title}</li>
                              <small className="text-gray-500">{blog.date_posted}</small>
                            </div>
                          </Link>
                        ) : ""
                      }
                      </ul>
                    </div>
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