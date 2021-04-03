import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./schemaOrg"

function SEO({ defaultDescription, lang, meta, title, isBlogPost, frontmatter}) {
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

  const description = defaultDescription || site.siteMetadata.description
  const image = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const keywords = site.siteMetadata.keywords || ``
  const appId = site.siteMetadata.fbAppID
  const author = site.siteMetadata.author
  const url = site.siteMetadata.siteUrl

  const datePublished = isBlogPost ? frontmatter.date : false
  const schemaTitle = isBlogPost ? frontmatter.title : title

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={appId} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={schemaTitle}
        image={image}
        description={description}
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
