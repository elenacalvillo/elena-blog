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
      social {
        instagram
      }
    }
  }
}
`)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.gatsbyImageData

  return (
    <div className="bio d-md-flex p-3">
      <div className="mr-md-5">
      <div className="d-flex align-items-center pl-0 mb-5">
        <img src="/logo.png" 
        alt="Elena Calvillo Website Logo" 
        width={100}
        />
        <h1 className="brand">{author.name}</h1>
        </div>
        <h2>Hi there, my name is Elena</h2>
        {author?.name && (
          <p className="summary">
            {" "}
            {author?.summary || null}
            {` `}
          </p>
          )}
          <br/>
        <a className="btn" href={`https://www.instagram.com/${social?.instagram}/?ref=elenacalvillo.com`} target="_blank">Join me on Instagram</a>
      </div>
      {avatar && (
        <GatsbyImage
          image={avatar}
          alt={author?.name || ``}
          className="bio-avatar d-none d-md-block align-self-sm-center ml-md-5"
          imgStyle={{
            borderRadius: `50%`,
          }} />
      )}
    </div>
  );
}

export default Bio
