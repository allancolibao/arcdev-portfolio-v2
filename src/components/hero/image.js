import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "new-dp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality:100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} 
              className="rounded-full border-2 md:border-4 border-gray-300 m-auto w-24 md:w-40 lg:w-full" 
              style={borderStyle}
              alt="Allan Colibao"
          />
}

const borderStyle = {
  borderColor: "#e3e3e3"
};

export default Image
