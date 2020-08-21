import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => { 

    if (typeof window === 'undefined') { return null }

    return(
    <Layout location={location}>
      <SEO title="404: Not Found | Allan Colibao - Front-end Developer"/>
      <h1 class="text-xl md:text-3xl lg:text-4xl font-black text-gray-400 leading-tight my-16">Under construction, Sorry for the inconvenience</h1>
    </Layout>
  )

}

export default NotFoundPage
