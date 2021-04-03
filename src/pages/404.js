import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout-404';
import SEO from '../components/seo';

import { Button } from 'react-bootstrap';

const NotFoundPage = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="404: Not Found" />
			<div className="not-found d-flex flex-column align-items-center text-center p-5">
				<h1 className="not-found-header">404</h1>
				<h3>Uh oh you found an error, but not everything is lost.</h3>
				<h2>Let's dance!</h2>
				<Button className="btn btn-info position-relative m-5">
					<Link to="/" itemProp="url">
						Go back to home
					</Link>
				</Button>
			</div>
		</Layout>
	);
};

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
