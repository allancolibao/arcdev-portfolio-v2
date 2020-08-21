import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageNotFound from "../images/svgs/page-not-found.svg";

const NotFoundPage = ({ location }) => { 

    if (typeof window === 'undefined') { return null }

    return(
    <Layout location={location}>
      <SEO title="404: Not Found | Allan Colibao - Front-end Developer"/>
      <div className="flex mx-auto items-center justify-center">
        <PageNotFound className="h-auto my-16"/>
      </div>
      <div className="flex mx-auto items-center justify-center">
      <Link to="/">
          <button className="bg-transparent 
          text-purple-400
          text-xs
          lg:text-xs 
          xl:text-base 
          font-semibold 
          py-1
          px-2
          md:py-1 
          md:px-3 
          border 
          rounded 
          border-purple-400 
          transition 
          duration-500 
          ease-in-out 
          transform 
          focus:outline-none
          hover:border-transparent 
          hover:bg-purple-500 
          hover:text-gray-200">
            {"<<"} Go back to home
          </button>
        </Link>
      </div>
    </Layout>
  )

}

export default NotFoundPage
