import React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Button } from "react-bootstrap"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      
      <Jumbotron>
      <h1 className="danger">Title Text</h1>
      <p className="h1">Subtitle Text</p>
      <Button bsStyle="primary">Learn more</Button>
    </Jumbotron>
      
      <Container className="pt-4 d-flex">
      <div className="col px-0">
        <Row>
          <Col lg="6">
            <h1 className="display-3">
              <span>...Oh hello!</span>
              I'm Elena Calvillo
            </h1>
            <p className="lead">
              I'm a passionate Front-end Developer. Resolving problems
              with design and code is what I love to do.
            </p>
            <div className="btn-wrapper">
              <Button
                className="btn-icon bg-gradient-info"
                color="info"
                href="/"
              >
                <span className="btn-inner--icon align-middle">
                  <i className="ni ni-single-copy-04" />
                </span>
                <span className="btn-inner--text">About me</span>
              </Button>
              <Button
                className="btn-icon bg-gradient-primary"
                color="primary"
                href="/"
              >
                <span className="btn-inner--icon align-middle">
                  <i className="ni ni-chat-round" />
                </span>
                <span className="btn-inner--text">Get in touch</span>
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <div className="text-center text-lg-right pt-5 pt-lg-0 px-lg-2">
            {/*
              <img
                alt="Elena Calvillo"
                className="rounded img-fluid shadow shadow-lg--hover"
                src={require("assets/img/theme/me.png")}
              />
               
              <img
                alt="..."
                className="img-center img-fluid w-75"
                src={require("assets/img/theme/silhouette.png")}
              />
              */}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
      
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
