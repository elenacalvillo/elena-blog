import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Resource = () => {
  const data = useStaticQuery(graphql`
    query ResourceQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="row row-cols-2 g-4">
      <div className="col mb-5">
        <Link to="" itemProp="url">
          <Card className="h-100" temProp="url">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://via.placeholder.com/200x300" alt="" />
              </div>
              <div className="col-md-8 pl-4">
                <div className="card-body">
                  <h5 className="card-title" itemProp="headline">
                    Product Books
                  </h5>
                  <p className="card-text" itemProp="description">
                    I crafted and tested each one of these templates so you can
                    quickly start filling just the information that you need.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="topics pt-1 pb-4">
                    <span className="mr-1 badge badge-secondary badge-pill">
                      Books
                    </span>
                  </div>
                  <Button className="btn-info">
                    <Link to="" itemProp="url">
                      Get free e-books
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default Resource
