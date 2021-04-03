exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogTemplate = require.resolve(`./src/templates/blog.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                date
                title
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

  exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
    if (stage === 'build-javascript') {
      actions.setWebpackConfig({
        devtool: false,
      })
    }

    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@firebase/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }