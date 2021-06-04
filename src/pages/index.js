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
  const feature = data?.feature?.childImageSharp?.fixed
  const books = data?.books?.childImageSharp?.fixed
  const templates = data?.templates?.childImageSharp?.fixed
  const jargon = data?.jargon?.childImageSharp?.fixed
  const conferences = data?.conferences?.childImageSharp?.fixed

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
              
      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5">The Product Management Toolbox you need</h2>
        <p className="text-center mb-5">
          I created this curated list of resources to help you to speed up your PM learning curve!
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={books}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Books
                      </h5>
                      <p className="card-text" itemProp="description">
                        Don't know where to start with PM? These books will help
                        you jump start your career.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free Books
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={templates}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Templates
                      </h5>
                      <p className="card-text" itemProp="description">
                        Don't know how to use frameworks? I created easy-to-use
                        templates just for you!
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free templates
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={jargon}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Jargon
                      </h5>
                      <p className="card-text" itemProp="description">
                        What the hell is MVP or WSJF? Learn all the terminology
                        fast with this compilation of terms.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free glossary
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card itemProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={conferences}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Conferences
                      </h5>
                      <p className="card-text" itemProp="description">
                        Attend conferences to learn about other PMs experience
                        and start growing your network.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          See conferences
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="col pt-3">
            <h4>
              <Link
                to="/resources"
                itemProp="url"
                className="pretty-link bolder"
              >
                Check all resources
              </Link>
            </h4>
          </div>
        </div>
      </div>
      
      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5 mb-5">New freebie! 🤩</h2>
        <div className="row">
          <div className="col-md-8 mx-auto mb-5">
            <Link to="" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image fixed={feature} className="position-static p-0" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        {" "}
                        How to create better User Stories{" "}
                      </h5>
                      <p className="card-text" itemProp="description">
                        This template will help you to transform who, what and
                        why into user stories and acceptance criteria’s format!
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link
                          to="https://www.notion.so/prdcttips/How-to-create-User-Stories-85c2c7483d314fb2b84520c93358be9b"
                          target="_blank"
                          rel="noreferrer"
                          itemProp="url"
                        >
                          Get free template{" "}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
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
      
      <h2 className="text-center pt-5 mb-5">Check out my lastest PM stories</h2>
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
      
      
      <div className="my-5">
      <a href="https://productschool.com?ref=elenacalvillo.com" target="_blank">
        <Card className="p-3">
          <div className="row">
            <div className="col-md-2 offset-md-1 text-center pt-3">
              <img
                className="img-fluid"
                src={ProductSchool}
                width="155"
                height="155"
                alt="Product School Founding 200"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">I'm a proud Product School student!</h5>
                <p className="card-text">
                  Product School Pro is the most exclusive community for Product
                  Leaders. All of our members are real-world Product Leaders
                  working at top companies including Google, Facebook, Netflix,
                  Airbnb, PayPal, Uber, and Amazon.
                </p>
              </div>
            </div>
          </div>
        </Card>
        </a>
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
    feature: file(absolutePath: { regex: "/feature.png/" }) {
      childImageSharp {
        fixed(quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    books: file(absolutePath: { regex: "/books.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    templates: file(absolutePath: { regex: "/templates.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jargon: file(absolutePath: { regex: "/jargon.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conferences: file(absolutePath: { regex: "/conferences.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
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
