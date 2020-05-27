exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogTemplate = require.resolve(`./src/template/blog.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  }