import React from "react"
import {Stacks, Tools, SelectedProjects, BlogList} from "../utils/data"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import MessageButton from "../components/contact/button"


const IndexPage = ({location}) => {

  const [ stacks ] = Stacks();
  const [ tools ] = Tools();
  const [ projects ] = SelectedProjects();
  const [ blogs ] = BlogList();

  return(
    <Layout location={location}>
      <SEO title="Front-end Developer" bodyBackground="#ffffff"/>
      <Hero />
      <Projects projects={projects}/>
      <Skills stacks={stacks} tools={tools}/>
      <Blogs blogs={blogs}/>
      <About />
      <MessageButton location={location} />
    </Layout>
  )
}

export default IndexPage
