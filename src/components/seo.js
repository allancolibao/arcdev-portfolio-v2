import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./schemaOrg"

function SEO({
  defaultDescription,
  lang,
  meta,
  title,
  isBlogPost,
  frontmatter,
}) {
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
            fbAppID
          }
        }
      }
    `
  )

  const metaDescription = defaultDescription || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const keywords = site.siteMetadata.keywords || ``
  const appId = site.siteMetadata.fbAppID
  const author = site.siteMetadata.author
  const url = site.siteMetadata.siteUrl

  const datePublished = isBlogPost ? frontmatter.date : false
  const schemaTitle = isBlogPost ? frontmatter.title : title

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s`}
        bodyAttributes={{
          style: `background-color : ${site.siteMetadata.backgroundColor}`,
        }}
        meta={[
          {
            name: `description`,
            content: metaDescription,
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
        ]
          .concat(
            metaImage
              ? [
                  {
                    name: `image`,
                    content: metaImage,
                  },
                  {
                    property: `og:image`,
                    content: metaImage,
                  },
                  {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                  },
                  {
                    name: `twitter:image`,
                    content: metaImage,
                  },
                ]
              : [
                  {
                    name: `twitter:card`,
                    content: `summary`,
                  },
                ]
          )
          .concat({
            name: `keywords`,
            content: keywords,
          })
          .concat(
            {
              name: `google-site-verification`,
              content: process.env.GATSBY_GOOGLE_VERFICATION_CODE,
            },
            {
              property: `fb:app_id`,
              content: appId,
            }
          )
          .concat(meta)}
      />
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={schemaTitle}
        image={metaImage}
        description={metaDescription}
        datePublished={datePublished}
        siteUrl={url}
        author={author}
        organization={`Arcdev`}
        defaultTitle={title}
      />
    </React.Fragment>
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
