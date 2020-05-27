import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import tw from 'twin.macro'


const LogoMessage = () => {
  const data = useStaticQuery(graphql`
    query {
     file(relativePath: { eq: "arcdev-logo-2.png" }) {
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
      <AniLink cover bg="#6f36bc" direction="right" duration={1} to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </AniLink>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
    ${tw`w-full flex items-center justify-between`}
`

export default LogoMessage
