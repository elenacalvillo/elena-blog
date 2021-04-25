import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from '../components/seo';

import { Button } from 'react-bootstrap';

const Thanks = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="404: Not Found" />
			<div className="col-md-8 mx-auto text-center">
				<div className="thanks w-50 mx-auto mb-5"></div>
				<h1>Thank you!</h1>
				<h3>Great, your subscription was successful. Now check your email to confirm it.</h3>
				<p>If you have feedback, feel free to send me an email to hello@elenacalvillo.com.</p>
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
