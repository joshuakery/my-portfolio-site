const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  //Post Templates
  const normalTemplate = path.resolve('src/templates/normal-post.js');
  const parallelTemplate = path.resolve('src/templates/parallel-post.js');
  const sketchTemplate = path.resolve('src/templates/sketch-post.js');
  const designTemplate = path.resolve('src/templates/design-post.js');
  //Page Templates
  const tagTemplate = path.resolve('src/templates/tags.js');
  const catTemplate = path.resolve('src/templates/category.js');
  //Query
  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              posttype
              tags
              categories
              maincontent {
                absolutePath
              }
              sketchbookcontent {
                absolutePath
              }
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      catsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // console.log(JSON.stringify(result, null, 4))
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.postsRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.posttype === 'parallel') {
        createPage({
            path: edge.node.fields.slug,
            component: parallelTemplate,
            context: {
                slug: edge.node.fields.slug,
            }
        });
    } 
    else if (edge.node.frontmatter.posttype === 'sketch') {
        createPage({
            path: edge.node.fields.slug,
            component: sketchTemplate,
            context: {
                slug: edge.node.fields.slug,
                maincontent_path: edge.node.frontmatter.maincontent.absolutePath,
                sketchbookcontent_path: edge.node.frontmatter.sketchbookcontent.absolutePath,
            }
        });
    }
    else if (edge.node.frontmatter.posttype === "sketchbook") {
      createPage({
          path: edge.node.fields.slug,
          component: normalTemplate,
          context: {
              slug: edge.node.fields.slug,
          },
      })
    }
    else if (edge.node.frontmatter.posttype === "design") {
      createPage({
          path: edge.node.fields.slug,
          component: designTemplate,
          context: {
              slug: edge.node.fields.slug,
          },
      })
    }
    else {
        createPage({
            path: edge.node.fields.slug,
            component: normalTemplate,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    }
  })

  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  const cats = result.data.catsGroup.group;
  cats.forEach(cat => {
    createPage({
      path: `/projects/${_.kebabCase(cat.fieldValue)}/`,
      component: catTemplate,
      context: {
        category: cat.fieldValue,
      }, 
    })
  })

}