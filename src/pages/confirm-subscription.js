import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from '../components/seo';

import { Button } from 'react-bootstrap';

const Confirmation = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Please confirm your subscription" />
			<div className="col-md-8 mx-auto text-center">
				<div className="confirmation w-75 mx-auto mb-5"></div>
				<h1>You are almost there!</h1>
				<h4>Now check your email to confirm your subscription.</h4>
				<p>Why double opt-in is necessary? I want to respect your privacy, so with this step I'm making sure you really want to subscribe to my newsletter.</p>
				<Button className="btn btn-info position-relative m-3">
					<Link to="/" itemProp="url">
						Go back to home
					</Link>
				</Button>
			</div>
		</Layout>
	);
};

export default Confirmation

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
