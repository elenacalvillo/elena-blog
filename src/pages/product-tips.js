import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card } from "react-bootstrap"
import Newsletter from "../components/convertkit"
//import Instagram from "../components/instagram"

const ProductTipsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newsletter = data?.newsletter?.childImageSharp?.fixed
  const books = data?.books?.childImageSharp?.fixed
  const templates = data?.templates?.childImageSharp?.fixed
  const jargon = data?.jargon?.childImageSharp?.fixed
  const conferences = data?.conferences?.childImageSharp?.fixed
  const Insta = data.allInstaNode.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Elena Calvillo | Product Management Tips on Instagram" />

      <div className="bio row p-3">
        <div className="col pt-5 pb-5">
          <h1>Are your tools holding you back from leveling up your career?</h1>
          <h2 className="summary">
            Let's make sure you're using the right toolbox to master your product
            management career.
          </h2>
        </div>
        <div className="col-md-7">
          <Card>
            <div className="row">
              <div className="col-md-5">
                <Image fixed={newsletter} className="position-static p-0" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title" itemProp="headline">
                    {" "}
                    Take your product career to the next level
                  </h3>
                  <p className="card-text" itemProp="description">
                    🚀 I’ll share resources and tips with you to level up your skills and save time. Sign up to access my FREE newsletter!
                  </p>
                  <div className="row pt-2">
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
      
      <div className="pt-1 pb-2">
        <h2 className="text-center pt-5 mb-4">It's hard to start a product career</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p>
              I wish someone could have told me how to start in product management... That's why my newsletter will give you the tools you need to start crushing it! Here's a sneak peek of what you'll learn:
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-1 pb-4">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col mb-5">
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
                        you to speed up your learning curve.
                      </p>
                    </div>

                  </div>
                </div>
              </Card>
          </div>
          <div className="col mb-5">
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
                   
                  </div>
                </div>
              </Card>
          </div>
          <div className="col mb-5">
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
                   
                  </div>
                </div>
              </Card>
          </div>
          <div className="col mb-5">
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
                   
                  </div>
                </div>
              </Card>
          </div>
        </div>
      </div>

      <div className="pt-1 pb-2">
        <h2 className="text-center pt-5 mb-5">What you'll get</h2>
        <div className="row row-cols-lg-5 benefits">
          <Card className="m-4 text-center">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h6 className="m-0 h1">
                    <i className="bi-tools"></i>
                  </h6>
                  <h4 className="card-title"> Free resources </h4>
                  <p className="card-text" itemProp="description">
                    I'll give you my curated list of free resources that I've
                    been collecting through the years.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="m-4 text-center">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h6 className="m-0 h1">
                    <i className="bi-alarm"></i>
                  </h6>
                  <h4 className="card-title"> Save time </h4>
                  <p className="card-text" itemProp="description">
                    Stop looking for the best tools out there and save time by
                    receiving it right in your inbox!
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="m-4 text-center">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h6 className="m-0 h1">
                    <i className="bi-emoji-sunglasses"></i>
                  </h6>
                  <h4 className="card-title"> Get inspired </h4>
                  <p className="card-text" itemProp="description">
                    I'll share pro tips and inspirational content to keep you
                    motivated.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="m-4 text-center">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h6 className="m-0 h1">
                    <i className="bi-bell"></i>
                  </h6>
                  <h4 className="card-title">Stay up to date</h4>
                  <p className="card-text" itemProp="description">
                    Be the first to know about trending tools including
                    discounts and offers.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="pt-1 pb-2">
        <h2 className="text-center pt-5 mb-4">It all began on Instagram!</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p>
              I created Product Tips to help you understand the product
              management world in a very easy way. I share many tips on how to
              create a roadmap, user stories, product strategy, free resources
              and much more. Check out my recent posts!
            </p>
          </div>
        </div>
      </div>

      <div className="row row-cols-2 row-cols-lg-6">
        {Insta.map((ig, i) =>
          ig.node.localFile ? (
            <a
              href={"https://www.instagram.com/p/" + ig.node.id}
              target="_blank"
            >
              <Card key={i} className="m-3">
                <Image
                  fluid={ig.node.localFile.childImageSharp.fluid}
                  className="img-fluid"
                />
                {/* This is commented
            <div className="d-flex justify-content-around pt-1">
              <div className="d-flex justify-content-center w-50">
                <i className="bi-suit-heart"></i>
                <span className="h5 ml-2">{ig.node.likes}</span>
              </div>
              <div className="d-flex justify-content-center w-50">
                <i className="bi-chat-left"></i>
                <span className="h5 ml-2">{ig.node.comments}</span>
              </div>
            </div>
            */}
              </Card>
            </a>
          ) : (
            <div></div>
          )
        )}
      </div>

    </Layout>
  )
}

export default ProductTipsIndex

export const pageQuery = graphql`
  query {
    newsletter: file(absolutePath: { regex: "/newsletter.png/" }) {
      childImageSharp {
        fixed(width: 659, height: 400, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    books: file(absolutePath: { regex: "/books.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 200, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    templates: file(absolutePath: { regex: "/templates.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 200, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jargon: file(absolutePath: { regex: "/jargon.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 200, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conferences: file(absolutePath: { regex: "/conferences.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 200, quality: 90) {
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
    allInstaNode(
      filter: { username: { eq: "prdct.tips" } }
      sort: { fields: timestamp, order: DESC }
      limit: 12
    ) {
      edges {
        node {
          id
          preview
          username
          likes
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
