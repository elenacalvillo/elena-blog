import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import ConvertKit from '../components/convertkit';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { Button, Card } from "react-bootstrap"

//import CV from "cv.js"

const ProductTipsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const avatar = data?.avatar?.childImageSharp?.fixed
  const books = data?.books?.childImageSharp?.fixed
  const templates = data?.templates?.childImageSharp?.fixed
  const jargon = data?.jargon?.childImageSharp?.fixed
  const conferences = data?.conferences?.childImageSharp?.fixed
  const posts = data.allMarkdownRemark.nodes
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Elena Calvillo | Product Management Tips on Instagram" />

      <div className="bio d-md-flex p-3">
        <div>
          <h1 className="fontSize-7">
            Welcome to {""}
            <a
              className="pretty-link bolder"
              href="https://www.instagram.com/prdct.tips/"
              target="_blank"
            >
              @prdct.tips
            </a>
          </h1>
          <p className="summary">
            Product Tips was born with the idea of helping people to easy
            understand the Product Management world.
          </p>
        </div>
        <Image
          fixed={avatar}
          className="bio-avatar align-self-sm-center img-fluid flex-sm-shrink-2 ml-md-3"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>

      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5">Jump start with free resources!</h2>
        <p className="text-center mb-5">
          Want to speed up and put in practice your knowledge? Well you're in
          the right place! <br /> I crafted and tested each one of these
          templates so you can quickly start filling just the information that
          you need.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col mb-5">
            <Link to="" itemProp="url">
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
                        <Link to="" itemProp="url">
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
            <Link to="" itemProp="url">
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
                        <Link to="" itemProp="url">
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
            <Link to="" itemProp="url">
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
                        <Link to="" itemProp="url">
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
            <Link to="" itemProp="url">
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
                        <Link to="" itemProp="url">
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
              <Link to="" itemProp="url" className="pretty-link bolder">
                Check all resources
              </Link>
            </h4>
          </div>
        </div>
      </div>

      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5">Recent Stories</h2>
        <p className="text-center mb-5">
          Want to speed up and put in practice your knowledge? Well you're in
          the right place! <br /> I crafted and tested each one of these
          templates so you can quickly start filling just the information that
          you need.
        </p>
        <Carousel responsive={responsive} className="row">
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
                </Link>
              </div>
            )
          })}
        </Carousel>
      </div>
    </Layout>
  )
}

export default ProductTipsIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300, quality: 90) {
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
    }
  }
`
