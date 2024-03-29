import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from '../components/seo';

import { Button } from 'react-bootstrap';

const Thanks = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Thanks for subscribing!" />
			<div className="col-md-8 mx-auto text-center">
				<div className="thanks w-50 mx-auto mb-5"></div>
				<h1>Thank you for getting this far!</h1>
				<h3>Your subscription was successful.</h3>
				<p>Now you'll receive occasional emails about Product Management stuff. <br/> Feel free to drop your comments or questions to hello@elenacalvillo.com</p>
				<Button className="btn btn-info position-relative m-3">
					<Link to="/" itemProp="url">
						Go back to home
					</Link>
				</Button>
			</div>
		</Layout>
	);
};

export default Thanks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
