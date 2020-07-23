import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "new-dp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality:100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} 
              className="shadow-xl mt-8" 
              style={borderStyle}
              alt="Allan Colibao"
          />
}

const borderStyle = {
  borderColor: "#e3e3e3"
};

export default Image
