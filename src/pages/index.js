import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card } from "react-bootstrap"

import ProductSchool from "../../static/ps-badge.jpg"
import Image from "gatsby-image"
import Newsletter from "../components/convertkit"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const newsletter = data?.newsletter?.childImageSharp?.fixed

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Elena Calvillo Product Manager" />
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
      <SEO title="Elena Calvillo Product Owner / Product Manager" />
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
      <h2 className="text-center pt-5 mb-5">Latest from the blog</h2>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {posts.slice(0, 6).map(post => {
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
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </span>,
                      ])}
                    </div>

                    <Button className="btn-info">
                      <Link to={post.frontmatter.slug} itemProp="url">
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

      <div className="row text-center">
        <div className="col pt-3">
          <h4>
            <Link to="/blog" itemProp="url" className="pretty-link bolder">
              Read all posts
            </Link>
          </h4>
        </div>
      </div>

      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5 mb-5">
          Don't want to miss valuable resources?
        </h2>
        <div className="row">
          <div className="col-md-8 mx-auto mb-5">
            <Card>
              <div className="row">
                <div className="col-md-5">
                  <Image fixed={newsletter} className="position-static p-0" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title" itemProp="headline">
                      {" "}
                      Receive resources right in your inbox!
                    </h3>
                    <p className="card-text" itemProp="description">
                      🚀 Speed up your learning curve with product management
                      resources.
                    </p>
                    <div className="row">
                      <Newsletter />
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <small>
                      I respect your{" "}
                      <a className="pretty-link bolder" href="/privacy">
                        privacy
                      </a>
                      . You can unsubscribe at anytime.
                    </small>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    newsletter: file(absolutePath: { regex: "/newsletter.png/" }) {
      childImageSharp {
        fixed(width: 659, height: 400, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
