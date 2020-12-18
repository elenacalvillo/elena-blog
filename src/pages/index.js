import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductSchool from "../../static/ps-badge.jpg"

import { Jumbotron, Button, Container, Card } from "react-bootstrap"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
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
      <SEO title="All posts" />
      <Bio />
      <div className="card m-3 mb-5 p-3">
        <div className="row">
          <div className="col-md-3 text-center">
            <img
              className="img-fluid ml-md-4 p-4"
              src={ProductSchool}
              alt="Product School Founding 200"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product School member</h5>
              <p className="card-text">
                I'm proud to be part of the Product School community!
              </p>
              <p className="card-text">
                Product School Pro is the most exclusive community for Product
                Leaders. All of our members are real-world Product Leaders
                working at top companies including Google, Facebook, Netflix,
                Airbnb, PayPal, Uber, and Amazon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">Latest from the blog</h2>
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
                  <span className="mr-1 badge badge-secondary badge-pill">
                    {post.frontmatter.tags}
                  </span>
                </div>
                <Button className="btn-info">
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

export default Index

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
