import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Jumbotron, Button, Container, Card } from "react-bootstrap"

//import CV from "cv.js"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Elena Calvillo Product Owner / Product Manager Instagram" />
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
      <SEO title="Elena Calvillo Product Owner / Product Manager Instagram" />
      <Bio />
      <div className="card-columns">
        {posts.slice(0, 6).map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Card key={post.fields.slug}>
              <div className="card-body">
                <small>{post.frontmatter.date}</small>
                <h5 className="card-title">
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h5>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
                <div className="topics pt-1 pb-4">
                  <span class="mr-1 badge badge-secondary badge-pill">
                    {post.frontmatter.tags}
                  </span>
                  <span class="mr-1 badge badge-secondary badge-pill">
                    Design
                  </span>
                  <span class="mr-1 badge badge-secondary badge-pill">
                    Develop
                  </span>
                  <span class="mr-1 badge badge-secondary badge-pill">UX</span>
                </div>
                <Button className="btn-primary">
                  <Link to={post.fields.slug} itemProp="url">
                    Learn more
                  </Link>
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

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
    }
  }
`
