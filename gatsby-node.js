const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== "MarkdownRemark") return

  const { createNodeField } = actions
  const fileNode = getNode(node.parent)
  const slug = `/${path.basename(fileNode.relativePath, path.extname(fileNode.relativePath))}/`
  const words = (node.internal.content || "").trim().split(/\s+/).filter(Boolean).length

  createNodeField({ node, name: "slug", value: slug })
  createNodeField({ node, name: "readingTime", value: Math.max(1, Math.ceil(words / 220)) })
}

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query BlogPages {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields { slug }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const posts = result.data.allMarkdownRemark.nodes
  posts.forEach((post, index) => {
    actions.createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.fields.slug,
        previousSlug: posts[index + 1]?.fields.slug || null,
        nextSlug: posts[index - 1]?.fields.slug || null,
      },
    })
  })
}
