import React, {useEffect, useState}from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from 'twin.macro'

import Header from "./header"
import Footer from "../components/footer"

const Layout = ({ children, location }) => {

  const [scrolling, setScrolling] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    window.scrollY > 850 ? setScrolling(true) : setScrolling(false)
  }

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} 
              location={location}  
              scrolling={scrolling}
      />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
    ${tw`container mx-auto w-full px-4 md:px-0`}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
