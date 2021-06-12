import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, quality: 90, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author {
        name
        summary
      }
    }
  }
}
`)

  const author = data.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.gatsbyImageData

  return (
    <div className="bio d-md-flex p-3">
      <div>
        <h1>Hi, I&#39;m Elena</h1>
        {author?.name && (
          <p className="summary">
            {" "}
            {author?.summary || null}
            {` `}
          </p>
        )}
        <br/>
        <p className="summary">I've built a community in Instagram where I help others to understand the PM world easily, check it out!</p>
        <a className="btn btn-info pt-2 mt-3" href="https://www.instagram.com/prdct.tips/?ref=elenacalvillo.com" target="_blank">Join free community</a>
      </div>
      {avatar && (
        <GatsbyImage
          image={avatar}
          alt={author?.name || ``}
          className="bio-avatar d-none d-md-block align-self-sm-center"
          imgStyle={{
            borderRadius: `50%`,
          }} />
      )}
    </div>
  );
}

export default Bio
