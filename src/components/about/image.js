import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ layout }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "new-dp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 330, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={layout}
      alt="Allan Colibao"
    />
  )
}

export default Image
