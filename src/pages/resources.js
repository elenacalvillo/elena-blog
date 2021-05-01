import React from 'react';
import { Link, graphql } from 'gatsby';
import { Button, Card } from "react-bootstrap"
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from "gatsby-image"
import Resource from '../components/resource';
import Newsletter from "../components/convertkit"

const ResourcesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const newsletter = data?.newsletter?.childImageSharp?.fixed

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Product Management Resources" />
      <h2 className="text-center">Product Management Resources</h2>
      <p className="text-center mb-5 col-md-9 mx-auto">
      Here you'll find a beautiful collection of useful Product Management resources. From books to events, podcasts, templates and much more! Also, I created some of these templates so you can increase your productivity.
      </p>
      <div className="container">
        <div className="row">
                  
          <Resource color="resource-template" title="Be S.M.A.R.T. freebie" link="https://www.notion.so/prdcttips/SMART-Goals-35a69d9d6ce74ef8bed560fd3c0b475e" body="Easy to fill SMART goals template created in Notion to help you reach out every of them." icon="bi-columns-gap" type="Template" />
          <Resource color="resource-event" title="Front: UX and Product" link="http://www.frontutah.com/conference/" body="Product conferences for UX designers and product managers with a series of real-world case studies." icon="bi-calendar4-event" type="Event" />
          <Resource color="resource-podcast" title="Honest UX Talks" link="https://anchor.fm/honestuxtalks" body="Honest conversations about UX design career, challenges, portfolios, mental health, and more." icon="bi-mic" type="Podcast" />
          <Resource color="resource-event" title="INDUSTRY Virtual" link="http://www.industryconference.com/" body="Software conference for product managers. Includes Q&A’s, exclusive podcast series, networking, and more." icon="bi-calendar4-event" type="Event" />
          <Resource color="resource-book" title="INSPIRED" link="https://svpg.com/inspired-how-to-create-products-customers-love/" body="Learn how today’s most successful tech companies define, design and develop the products that have earned the love of billions of people." icon="bi-book" type="Book" />
          <Resource color="resource-event" title="Mind the Product Event" link="https://www.mindtheproduct.com/conferences/" body="Explore the intersection of design, technology, and business inspiring you to build better products." icon="bi-calendar4-event" type="Event" />
          <Resource color="resource-template" title="Miro PM Templates" link="https://miro.com/templates/product-management/" body="Simplify your workflows and optimize your daily routines with their collection of product management templates." icon="bi-columns-gap" type="Template" />
          <Resource color="resource-blog" title="Pendo Blog" link="https://www.pendo.io/pendo-blog/" body="Great blog resource for product managers and anyone interested in building a fantastic product." icon="bi-journal-text" type="Blog" />
          <Resource color="resource-event" title="Product Design Week" link="http://futurelondonacademy.co.uk/en/courses" body="Learn how to UX strategy, work with clients, and improve their services with Future London Academy." icon="bi-calendar4-event" type="Event" />
          <Resource color="resource-event" title="ProductCon" link="http://productschool.com/productcon/" body="Organized by Product School, is the largest online product management conference in the world." icon="bi-calendar4-event" type="Event" />
          <Resource color="resource-tool" title="ProductPlan" link="https://www.productplan.com/" body="Makes it easy for product teams to build and share visual and interactive product roadmaps." icon="bi-kanban" type="Tool" />
          <Resource color="resource-blog" title="ProductPlan Blog" link="https://www.productplan.com/blog/" body="Rich repository of insights into all things product management, particularly the art of product roadmapping." icon="bi-journal-text" type="Blog" />
          <Resource color="resource-book" title="Rework" link="https://basecamp.com/books/rework" body="REWORK is the perfect playbook for anyone who’s ever dreamed of doing it on their own." icon="bi-book" type="Book" />
          <Resource color="resource-book" title="The Anatomy of a Product Launch" link="https://go.productplan.com/product-launch-book/" body="Great product launches plan involving the coordination, research, and enthusiasm of departments across the company." icon="bi-book" type="Book" />
          <Resource color="resource-book" title="The Art of Product Management" link="https://www.mironov.com/book/" body="Collects the most popular Product Bytes with additional commentary and forewords by Professor Henry Chesbrough and David Strom." icon="bi-book" type="Book" />
          <Resource color="resource-book" title="The Product Book" link="https://productschool.com/the-product-book/" body="This book tells you all about Product Management and how to begin. A must have for every PM!" icon="bi-book" type="Book" />
          <Resource color="resource-blog" title="The Product School Blog" link="https://productschool.com/blog/" body="Free knowledge to become a great Product Manager from Product School" icon="bi-journal-text" type="Blog" />
          <Resource color="resource-podcast" title="The UX Kitchen" link="https://csabahazi.com/ux-kitchen-podcast/overview" body="The podcast takes you inside the minds and behind the scenes of successful designers and their freelance businesses." icon="bi-mic" type="Podcast" />
          <Resource color="resource-template" title="User Stories freebie" link="https://www.notion.so/prdcttips/How-to-create-User-Stories-85c2c7483d314fb2b84520c93358be9b" body="This template will help you to transform who, what and why into user stories and acceptance criteria’s format!" icon="bi-columns-gap" type="Template" />
          
        </div>
      </div>
      
      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5 mb-5">Don't want to miss valuable resources?</h2>
        <div className="row">
          <div className="col-md-8 mx-auto mb-5">
              <Card>
                <div className="row">
                  <div className="col-md-5">
                    <Image
                    fixed={newsletter}
                    className="position-static p-0"
                  />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                    <h3 className="card-title" itemProp="headline"> Receive resources right in your inbox!</h3>
                    <p className="card-text" itemProp="description">
                    🚀 Speed up your learning curve with product management resources.</p>
                    <div className="row">
                      <Newsletter />
                    </div>
                    </div>
                    <div className="card-footer text-center">
                      <small>I respect your <a className="pretty-link bolder" href="/privacy">privacy</a>. You can unsubscribe at anytime.</small>
                    </div>
                  </div>
                </div>
              </Card>
          </div>
          </div>
          </div>
    </Layout>
  );
};

export default ResourcesPage

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
  }
`;