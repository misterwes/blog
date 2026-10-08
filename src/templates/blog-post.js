import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data, pageContext }) {
  const { markdownRemark: post, previous, next } = data
  const image = post.frontmatter.image

  return (
    <Layout>
      <article className="article">
        <header className="article-header">
          <p className="post-date">{post.frontmatter.date}</p>
          <h1>{post.frontmatter.title}</h1>
          {post.frontmatter.description && <p className="article-deck">{post.frontmatter.description}</p>}
          <p className="article-meta">{post.fields.readingTime} min read</p>
          {post.frontmatter.tags?.length > 0 && (
            <ul className="tag-list" aria-label="Tags">
              {post.frontmatter.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          )}
        </header>
        {image && (
          <figure className="article-figure">
            <img src={withPrefix(image)} alt={post.frontmatter.imageAlt || ""} />
            {post.frontmatter.imageCaption && <figcaption>{post.frontmatter.imageCaption}</figcaption>}
          </figure>
        )}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <nav className="post-navigation" aria-label="More posts">
          {previous && <Link rel="prev" to={previous.fields.slug}>← {previous.frontmatter.title}</Link>}
          {next && <Link rel="next" to={next.fields.slug}>{next.frontmatter.title} →</Link>}
        </nav>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!, $previousSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields { slug readingTime }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        tags
        image
        imageAlt
        imageCaption
      }
    }
    previous: markdownRemark(fields: { slug: { eq: $previousSlug } }) {
      fields { slug }
      frontmatter { title }
    }
    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      fields { slug }
      frontmatter { title }
    }
  }
`

export function Head({ data }) {
  return <title>{data.markdownRemark.frontmatter.title} | The Notebook</title>
}
