import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import tw from 'twin.macro'


const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
     file(relativePath: { eq: "arcdev-logo.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <LogoDiv>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed}/>
      </Link>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
    ${tw`w-full flex items-center justify-between`}
`

export default Logo
