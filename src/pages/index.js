import React from "react"
import { SelectedProjects, BlogList, Repos } from "../utils/data"

import { isBrowser } from "../utils/browser"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Repository from "../components/repo"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import MessageButton from "../components/contact/button"


const IndexPage = ({location}) => {

  const [ projects ] = SelectedProjects();
  const [ blogs ] = BlogList();
  const [ repos ] = Repos();

  if (!isBrowser()){ return null }

  return(
    <Layout location={location}>
      <SEO title="Home | Allan Colibao - Front-end Developer"/>
      <Hero />
      <Projects projects={projects}/>
      <Repository repos={repos}/>
      <Blogs blogs={blogs}/>
      <About />
      <MessageButton location={location} />
    </Layout>
  )
}

export default IndexPage
