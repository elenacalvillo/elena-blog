import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300, quality: 90) {
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
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar align-self-sm-center img-fluid flex-sm-shrink-2 ml-md-3"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
    </div>
  )
}

export default Bio
