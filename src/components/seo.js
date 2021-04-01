import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            backgroundColor
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const keywords = site.siteMetadata.keywords || ``

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      bodyAttributes={{style: `background-color : ${site.siteMetadata.backgroundColor}`}}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metaImage ? [
        {
          property: `image`,
          content: metaImage
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          property: `og:image:alt`,
          content: title,
        },
        {
          property: 'og:image:width',
          content: metaImage.width
        },
        {
          property: 'og:image:height',
          content: metaImage.height
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        }
      ] : [
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ])
      .concat({
        name: `keywords`,
        content: keywords,
      }
      )
      .concat({
        name: `google-site-verification`,
        content: process.env.GATSBY_GOOGLE_VERFICATION,
      })
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
