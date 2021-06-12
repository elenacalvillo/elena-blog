import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card } from "react-bootstrap"
import Newsletter from "../components/convertkit"
//import Instagram from "../components/instagram"

const ProductTipsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newsletter = data?.newsletter?.childImageSharp?.gatsbyImageData
  const books = data?.books?.childImageSharp?.gatsbyImageData
  const templates = data?.templates?.childImageSharp?.gatsbyImageData
  const jargon = data?.jargon?.childImageSharp?.gatsbyImageData
  const conferences = data?.conferences?.childImageSharp?.gatsbyImageData

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
                <GatsbyImage image={newsletter} className="img-fluid" alt="The PM Toolbox Newsletter"/>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title" itemProp="headline">
                    {" "}
                    Take your product career to the next level
                  </h3>
                  <p className="card-text" itemProp="description">
                    🚀 Get FREE resources and tips to level up your skills and save time. Join now!
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
                    <GatsbyImage image={books} className="img-fluid" alt="Product Books"/>
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
                    <GatsbyImage image={templates} className="img-fluid" alt="Product Templates"/>
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
                    <GatsbyImage image={jargon} className="img-fluid" alt="Product Jargon"/>
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
                    <GatsbyImage image={conferences} className="img-fluid" alt="Product Conferences"/>
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

      

    </Layout>
  );
}

export default ProductTipsIndex

export const pageQuery = graphql`{
  newsletter: file(absolutePath: {regex: "/newsletter.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 659, height: 400, quality: 90, layout: FIXED)
    }
  }
  books: file(absolutePath: {regex: "/books.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 550, height: 200, quality: 90, layout: FIXED)
    }
  }
  templates: file(absolutePath: {regex: "/templates.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 550, height: 200, quality: 90, layout: FIXED)
    }
  }
  jargon: file(absolutePath: {regex: "/jargon.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 550, height: 200, quality: 90, layout: FIXED)
    }
  }
  conferences: file(absolutePath: {regex: "/conferences.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 550, height: 200, quality: 90, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
