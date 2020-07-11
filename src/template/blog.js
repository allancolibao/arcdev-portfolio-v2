import React from "react"
import { graphql } from "gatsby"
import { BlogList } from "../utils/data"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from "../components/blogs"

const Template = ({data, location}) => {

  const { markdownRemark } = data
  const { html } = markdownRemark
  const [ blogs ] = BlogList();

  const goBack = () => {
    window.history.back();
  }

  return (
    <Layout location={location}>
       <SEO title="Blog" bodyBackground="#211c42"/>
       <BackButton onClick={() => goBack()} >{"<< Go back"}</BackButton>
        <div className="blog-post-container">
            <div className="blog-post">
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
        <Blogs blogs={blogs}/>
    </Layout>
  )
}

const BackButton = styled.button`
    ${tw`mt-16 mb-4 
      text-purple-600 
      text-sm
      md:text-base
      font-normal 
      focus:outline-none 
      hover:text-purple-700`}
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