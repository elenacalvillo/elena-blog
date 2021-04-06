import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Resource from '../components/resource';

const ResourcesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Product Management Resources" />
      <h2 className="text-center">Product Management Resources</h2>
      <p className="text-center mb-5 col-md-9 mx-auto">
      Here you'll find a beautiful collection of useful Product Management resources. From books to events, podcasts, templates and much more! Also, I created some of these templates so you can increase your productivity.
      </p>
      <div className="container">
        <div className="row">
          <Resource color="resource-book" title="The Product Book" link="https://productschool.com/the-product-book/" body="This book tells you all about Product Management and how to begin. A must have for every PM!" icon="bi-book" type="Book" />
          
          <Resource color="resource-event" title="Mind the Product Event" link="https://www.mindtheproduct.com/conferences/" body="Explore the intersection of design, technology, and business inspiring you to build better products." icon="bi-calendar4-event" type="Event" />
          
          <Resource color="resource-template" title="User Stories freebie" link="https://www.notion.so/prdcttips/How-to-create-User-Stories-85c2c7483d314fb2b84520c93358be9b" body="This template will help you to transform who, what and why into user stories and acceptance criteria’s format!" icon="bi-columns" type="Template" />
          
          <Resource color="resource-event" title="ProductCon" link="http://productschool.com/productcon/" body="Organized by Product School, is the largest online product management conference in the world." icon="bi-calendar4-event" type="Event" />
          
          <Resource color="resource-template" title="Be S.M.A.R.T. freebie" link="https://www.notion.so/prdcttips/SMART-Goals-35a69d9d6ce74ef8bed560fd3c0b475e" body="Easy to fill SMART goals template created in Notion to help you reach out every of them." icon="bi-columns" type="Template" />
          
          <Resource color="resource-event" title="Front: UX and Product" link="http://www.frontutah.com/conference/" body="Product conferences for UX designers and product managers with a series of real-world case studies." icon="bi-calendar4-event" type="Event" />
          
          <Resource color="resource-template" title="Miro PM Templates" link="https://miro.com/templates/product-management/" body="Simplify your workflows and optimize your daily routines with their collection of product management templates." icon="bi-columns" type="Template" />
          
          <Resource color="resource-book" title="Rework" link="https://basecamp.com/books/rework" body="REWORK is the perfect playbook for anyone who’s ever dreamed of doing it on their own." icon="bi-book" type="Book" />
          
          
          
          
          
          <Resource color="resource-event" title="Product Design Week" link="http://futurelondonacademy.co.uk/en/courses" body="Learn how to UX strategy, work with clients, and improve their services with Future London Academy." icon="bi-calendar4-event" type="Event" />
          
          <Resource color="resource-event" title="INDUSTRY Virtual" link="http://www.industryconference.com/" body="Software conference for product managers. Includes Q&A’s, exclusive podcast series, networking, and more." icon="bi-calendar4-event" type="Event" />
          
        </div>
      </div>
    </Layout>
  );
};

export default ResourcesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;