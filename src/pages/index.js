import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function HomePage({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section aria-labelledby="latest-heading">
        <div className="section-heading">
          <p className="eyebrow">From the notebook</p>
          <h1 id="latest-heading">Latest writing</h1>
        </div>
        <div className="post-list">
          {posts.map(post => (
            <article className="post-preview" key={post.fields.slug}>
              <p className="post-date">{post.frontmatter.date}</p>
              <h2><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
              {post.frontmatter.description && <p className="post-summary">{post.frontmatter.description}</p>}
              {post.frontmatter.tags?.length > 0 && (
                <ul className="tag-list" aria-label="Tags">
                  {post.frontmatter.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>The Notebook | Latest writing</title>
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields { slug }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
          tags
        }
      }
    }
  }
`
