import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button, Card } from "react-bootstrap"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Elena Calvillo Product Owner / Product Manager blog posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Elena Calvillo Product Owner / Product Manager blog posts" />
      <h2 className="text-center mb-5">Latest from the blog</h2>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div className="col mb-5">
              <Link to={post.fields.slug} itemProp="url">
                <Card key={post.fields.slug} className="h-100" temProp="url">
                  <div className="card-body">
                    <small>{post.frontmatter.date}</small>
                    <h5 className="card-title" itemProp="headline">
                      {title}
                    </h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="topics pb-4">
                    {post.frontmatter.tags.map((tag, i) => [
                      <span
                        className="mr-1 badge badge-secondary badge-pill"
                        key={i}
                      >
                        <Link to={`/tags/${kebabCase(tag)}/`}>
                          {tag}
                        </Link>
                      </span>
                    ])}
                  </div>
                    <Button className="btn-info">
                      <Link to={post.fields.slug} itemProp="url">
                        Learn more
                      </Link>
                    </Button>
                  </div>
                </Card>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
