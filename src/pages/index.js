import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Image from "gatsby-image"
import Newsletter from "../components/convertkit"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const newsletter = data?.newsletter?.childImageSharp?.fixed
  const feature = data?.feature?.childImageSharp?.fixed
  const books = data?.books?.childImageSharp?.fixed
  const templates = data?.templates?.childImageSharp?.fixed
  const jargon = data?.jargon?.childImageSharp?.fixed
  const conferences = data?.conferences?.childImageSharp?.fixed

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Elena Calvillo Product Manager" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Elena Calvillo Product Owner / Product Manager" />
      <Bio />
              
      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5">The Product Management Toolbox you need</h2>
        <p className="text-center mb-5">
          I created this curated list of resources to help you to speed up your PM learning curve!
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <StaticImage
                      src="./images/books.png" 
                      alt="Product Books"
                      placeholder="blurred"
                      layout="fixed"
                      width={200}
                      height={200}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Books
                      </h5>
                      <p className="card-text" itemProp="description">
                        Don't know where to start with PM? These books will help
                        you jump start your career.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free Books
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={templates}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Templates
                      </h5>
                      <p className="card-text" itemProp="description">
                        Don't know how to use frameworks? I created easy-to-use
                        templates just for you!
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free templates
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={jargon}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Jargon
                      </h5>
                      <p className="card-text" itemProp="description">
                        What the hell is MVP or WSJF? Learn all the terminology
                        fast with this compilation of terms.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          Get free glossary
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col mb-5">
            <Link to="/resources" itemProp="url">
              <Card itemProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image
                      fixed={conferences}
                      className="img-fluid d-block position-static p-0"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        Product Conferences
                      </h5>
                      <p className="card-text" itemProp="description">
                        Attend conferences to learn about other PMs experience
                        and start growing your network.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link to="/resources" itemProp="url">
                          See conferences
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="col pt-3">
            <h4>
              <Link
                to="/resources"
                itemProp="url"
                className="pretty-link bolder"
              >
                Check all resources
              </Link>
            </h4>
          </div>
        </div>
      </div>
      
      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5 mb-5">New freebie! 🤩</h2>
        <div className="row">
          <div className="col-md-8 mx-auto mb-5">
            <Link to="" itemProp="url">
              <Card temProp="url">
                <div className="row">
                  <div className="col-md-5">
                    <Image fixed={feature} className="position-static p-0" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title" itemProp="headline">
                        {" "}
                        How to create better User Stories{" "}
                      </h5>
                      <p className="card-text" itemProp="description">
                        This template will help you to transform who, what and
                        why into user stories and acceptance criteria’s format!
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button className="btn-info">
                        <Link
                          to="https://www.notion.so/prdcttips/How-to-create-User-Stories-85c2c7483d314fb2b84520c93358be9b"
                          target="_blank"
                          rel="noreferrer"
                          itemProp="url"
                        >
                          Get free template{" "}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-1 pb-4">
        <h2 className="text-center pt-5 mb-5">
          Don't want to miss valuable resources?
        </h2>
        <div className="row">
          <div className="col-md-8 mx-auto mb-5">
            <Card>
              <div className="row">
                <div className="col-md-5">
                  <Image fixed={newsletter} className="position-static p-0" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title" itemProp="headline">
                      {" "}
                      Receive resources right in your inbox!
                    </h3>
                    <p className="card-text" itemProp="description">
                      🚀 Speed up your learning curve with product management
                      resources.
                    </p>
                    <div className="row">
                      <Newsletter />
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <small>
                      I respect your{" "}
                      <a className="pretty-link bolder" href="/privacy">
                        privacy
                      </a>
                      . You can unsubscribe at anytime.
                    </small>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <h2 className="text-center pt-5 mb-5">Check out my lastest PM stories</h2>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {posts.slice(0, 6).map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div className="col mb-5">
              <Link to={post.fields.slug} itemProp="url">
                <Card key={post.fields.slug} className="h-100" temProp="url">
                  <div className="card-body">
                    <small>{post.frontmatter.date}</small>
                    <h5 className="card-title" itemProp="headline">
                      {title}
                    </h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                  <div className="card-footer">
                    <div className="topics pb-4">
                      {post.frontmatter.tags.map((tag, i) => [
                        <span
                          className="mr-1 badge badge-secondary badge-pill"
                          key={i}
                        >
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </span>,
                      ])}
                    </div>

                    <Button className="btn-info">
                      <Link to={post.frontmatter.slug} itemProp="url">
                        Learn more
                      </Link>
                    </Button>
                  </div>
                </Card>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="row text-center">
        <div className="col pt-3">
          <h4>
            <Link to="/blog" itemProp="url" className="pretty-link bolder">
              Read all posts
            </Link>
          </h4>
        </div>
      </div>
      
      
      <div className="my-5">
      <a href="https://productschool.com?ref=elenacalvillo.com" target="_blank">
        <Card className="p-3">
          <div className="row">
            <div className="col-md-2 offset-md-1 text-center pt-3">
              
              <svg className="img-fluid" version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="683.000000pt" height="684.000000pt" viewBox="0 0 683.000000 684.000000"
               preserveAspectRatio="xMidYMid meet">
              <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,684.000000) scale(0.100000,-0.100000)"
              fill="#121E48" stroke="none">
              <path d="M3205 6813 c-221 -15 -520 -66 -732 -127 -407 -117 -837 -340 -1178
              -612 -141 -113 -416 -388 -529 -529 -321 -403 -551 -881 -661 -1374 -60 -268
              -79 -448 -79 -746 0 -370 40 -653 139 -983 381 -1263 1458 -2192 2761 -2382
              276 -40 645 -44 919 -9 1084 135 2045 795 2568 1765 240 446 369 911 396 1431
              64 1205 -508 2338 -1519 3010 -607 403 -1360 604 -2085 556z m595 -268 c1000
              -125 1862 -704 2368 -1591 200 -351 338 -793 382 -1224 14 -135 14 -475 0
              -610 -62 -614 -280 -1156 -661 -1647 -107 -138 -362 -394 -504 -507 -526 -418
              -1157 -657 -1810 -684 -781 -33 -1482 188 -2095 662 -131 101 -421 388 -524
              519 -373 472 -592 1004 -667 1622 -16 130 -16 542 0 670 74 600 268 1093 612
              1550 347 463 800 814 1328 1030 314 129 605 194 1011 229 91 8 439 -4 560 -19z"/>
              <path d="M3185 6383 c-168 -12 -424 -59 -615 -114 -784 -226 -1482 -825 -1835
              -1573 -294 -622 -363 -1339 -195 -2006 185 -734 648 -1369 1300 -1785 138 -88
              413 -222 573 -279 600 -216 1283 -230 1888 -41 160 51 260 90 424 170 315 153
              581 348 837 614 374 388 635 872 752 1394 125 554 90 1137 -100 1664 -57 160
              -191 435 -279 573 -507 794 -1327 1296 -2255 1380 -106 9 -378 11 -495 3z
              m650 -83 c771 -115 1443 -514 1910 -1135 120 -160 186 -267 286 -470 306 -621
              377 -1339 199 -2019 -260 -995 -1072 -1808 -2062 -2065 -466 -121 -928 -129
              -1396 -25 -283 62 -655 216 -897 369 -642 407 -1102 1042 -1279 1768 -63 254
              -79 398 -80 687 -1 307 17 460 84 730 98 392 288 772 549 1100 97 122 329 354
              451 451 328 261 708 451 1100 549 171 42 289 62 515 84 107 11 486 -4 620 -24z"/>
              <path d="M3223 5823 l-93 -4 0 -44 0 -45 80 0 80 0 0 -83 c0 -46 3 -139 7
              -205 l6 -122 50 0 50 0 -7 123 c-3 67 -7 160 -8 207 l-1 85 76 3 77 3 0 44 0
              45 -112 -2 c-62 -1 -155 -4 -205 -5z"/>
              <path d="M2855 5771 c-59 -17 -86 -31 -131 -73 -59 -54 -86 -113 -86 -187 0
              -100 46 -178 132 -225 98 -54 214 -44 311 26 l42 30 -29 29 -29 29 -59 -30
              c-70 -36 -123 -38 -175 -9 -54 30 -82 77 -87 146 -9 108 57 173 182 181 l62 4
              5 37 c2 20 3 38 1 40 -8 9 -110 10 -139 2z"/>
              <path d="M3970 5750 c-47 -11 -96 -66 -105 -119 -10 -63 16 -105 111 -173 88
              -63 112 -100 79 -124 -39 -29 -123 -11 -191 41 l-31 24 -27 -28 c-14 -15 -26
              -32 -26 -38 0 -16 88 -69 148 -88 65 -21 148 -17 185 11 56 40 73 123 38 181
              -11 17 -55 58 -98 90 -79 60 -97 89 -73 119 21 24 89 17 150 -16 l54 -31 30
              31 c30 29 30 30 11 45 -34 27 -138 72 -180 77 -22 3 -56 2 -75 -2z"/>
              <path d="M2343 5578 c-18 -11 -33 -23 -33 -28 0 -4 38 -72 85 -151 47 -78 85
              -151 85 -161 0 -32 -29 -77 -60 -93 -39 -20 -93 -19 -118 3 -11 9 -56 79 -102
              155 l-81 137 -40 -22 c-21 -12 -39 -25 -39 -29 0 -8 143 -248 170 -285 8 -12
              33 -33 54 -48 125 -85 340 58 312 207 -7 35 -181 338 -194 336 -4 0 -22 -10
              -39 -21z"/>
              <path d="M4403 5505 c-155 -77 -187 -271 -68 -413 32 -39 115 -80 178 -88 l47
              -7 0 41 c0 41 0 41 -54 56 -126 37 -177 136 -125 244 30 60 89 102 146 102 53
              0 95 -20 145 -67 l36 -35 31 21 c17 12 31 27 31 33 0 18 -82 92 -125 113 -26
              12 -67 20 -115 22 -64 3 -83 0 -127 -22z"/>
              <path d="M4763 5111 l-172 -178 35 -34 34 -33 69 68 69 69 29 -21 c15 -11 50
              -43 78 -71 l49 -51 -69 -70 -69 -70 34 -35 34 -35 154 152 c84 84 163 166 174
              181 l20 29 -33 35 -34 35 -72 -78 -73 -79 -74 74 -75 74 70 75 c38 41 69 78
              69 83 0 8 -62 59 -71 59 -2 -1 -81 -81 -176 -179z"/>
              <path d="M1820 5171 c-53 -17 -87 -42 -157 -113 l-73 -73 178 -178 178 -178
              82 84 c45 47 89 101 97 120 44 106 -13 244 -131 313 -46 27 -131 39 -174 25z
              m142 -124 c25 -18 53 -52 67 -80 23 -46 23 -49 7 -91 -9 -23 -32 -58 -51 -76
              l-35 -34 -110 109 c-61 60 -110 113 -110 117 0 4 23 26 51 48 67 53 117 55
              181 7z"/>
              <path d="M3240 4979 c-361 -41 -674 -192 -930 -449 -483 -482 -596 -1206 -284
              -1810 214 -413 584 -698 1049 -808 101 -24 127 -26 330 -26 190 0 233 3 318
              22 615 137 1072 594 1209 1209 19 85 22 128 22 318 0 203 -2 229 -26 330 -73
              309 -213 561 -431 775 -332 327 -800 491 -1257 439z m937 -1351 c-3 -442 -7
              -636 -16 -668 -100 -375 -406 -606 -781 -588 -193 10 -344 80 -490 227 -95 96
              -152 191 -191 321 -23 74 -23 83 -27 703 l-3 627 756 0 756 0 -4 -622z"/>
              <path d="M2790 3583 c0 -600 1 -612 60 -734 81 -170 242 -301 421 -344 82 -19
              226 -19 308 0 219 52 404 236 461 461 19 72 20 111 20 621 l0 543 -635 0 -635
              0 0 -547z m793 320 c89 -42 168 -121 210 -210 30 -64 32 -74 32 -183 0 -108
              -2 -119 -31 -180 -64 -135 -192 -231 -329 -248 l-60 -7 -3 -183 c-1 -100 -6
              -182 -10 -182 -4 0 -38 7 -75 15 -89 19 -155 56 -221 125 -107 112 -126 182
              -126 477 0 118 5 235 11 265 32 150 134 270 279 327 46 17 72 21 155 18 88 -2
              108 -6 168 -34z"/>
              <path d="M3405 3838 c-3 -7 -4 -159 -3 -338 l3 -325 35 3 c67 5 130 33 183 82
              146 133 153 345 15 487 -61 63 -220 125 -233 91z"/>
              <path d="M3255 3809 c-59 -31 -122 -97 -153 -159 l-27 -55 0 -265 0 -265 26
              -56 c15 -32 45 -75 68 -98 38 -38 107 -81 131 -81 7 0 10 161 10 500 0 275 -3
              500 -8 500 -4 0 -25 -9 -47 -21z"/>
              <path d="M5184 4731 c-143 -65 -201 -230 -128 -362 52 -93 156 -147 259 -134
              178 22 286 217 206 372 -24 48 -88 107 -137 128 -50 21 -149 19 -200 -4z m203
              -99 c28 -15 60 -68 68 -112 17 -97 -112 -206 -221 -186 -48 9 -98 59 -113 111
              -16 59 1 106 55 154 65 57 143 69 211 33z"/>
              <path d="M1451 4713 c-130 -46 -198 -218 -137 -348 41 -89 122 -145 222 -153
              136 -11 259 93 271 228 8 81 -11 140 -60 197 -76 85 -188 114 -296 76z m165
              -104 c67 -32 99 -79 99 -148 0 -127 -110 -186 -233 -125 -64 32 -94 72 -99
              133 -11 124 110 197 233 140z"/>
              <path d="M5444 4160 c-61 -19 -126 -73 -158 -130 -27 -47 -31 -65 -31 -125 1
              -80 21 -129 77 -182 106 -102 282 -96 377 12 85 97 89 226 12 331 -57 77 -187
              121 -277 94z m173 -121 c43 -27 66 -72 67 -131 0 -160 -263 -215 -329 -69 -21
              48 -16 111 12 150 49 67 180 93 250 50z"/>
              <path d="M1187 4139 c-21 -11 -47 -34 -57 -52 -24 -39 -76 -256 -64 -267 5 -4
              106 -31 224 -59 118 -28 225 -54 236 -57 18 -5 22 0 28 31 4 20 9 42 12 49 4
              10 -23 20 -90 35 -53 13 -96 25 -96 29 0 4 5 24 10 44 l11 36 97 22 c53 12
              102 27 108 34 11 10 36 97 30 103 -1 1 -51 -11 -110 -28 -60 -16 -109 -29
              -110 -27 -23 55 -49 86 -87 106 -53 27 -92 27 -142 1z m111 -95 c13 -9 22 -26
              22 -40 0 -31 -20 -116 -30 -127 -8 -9 -120 11 -120 21 0 23 35 131 47 145 20
              21 52 22 81 1z"/>
              <path d="M1125 3625 c-82 -44 -95 -78 -95 -240 l0 -125 250 0 250 0 0 50 0 50
              -90 0 -90 0 0 84 c0 90 -16 127 -72 169 -36 27 -114 33 -153 12z m113 -105
              c19 -18 22 -32 22 -91 l0 -70 -67 3 -68 3 1 67 c0 51 5 73 19 88 23 26 65 26
              93 0z"/>
              <path d="M5316 3459 c-3 -34 -6 -109 -6 -165 l0 -104 29 0 c16 0 36 -3 45 -6
              14 -5 16 4 16 62 0 38 3 93 7 123 l6 53 204 -7 203 -7 0 49 0 50 -152 6 c-83
              4 -195 7 -248 7 l-97 0 -7 -61z"/>
              <path d="M5325 2595 c-65 -35 -114 -107 -115 -166 -1 -126 141 -252 285 -253
              244 -2 278 293 47 406 -61 29 -173 36 -217 13z m182 -104 c72 -37 120 -106
              107 -157 -32 -129 -314 -41 -314 98 0 29 25 67 54 79 31 13 109 3 153 -20z"/>
              <path d="M1380 2409 c-112 -66 -206 -121 -208 -123 -6 -6 40 -76 50 -76 5 0
              40 18 77 40 37 22 72 40 77 40 5 0 32 -38 59 -85 27 -47 51 -85 54 -85 3 0 21
              9 39 20 l33 20 -28 48 c-15 26 -37 64 -50 84 -13 21 -23 41 -23 45 0 7 85 63
              95 63 3 0 32 -47 66 -105 l62 -105 38 22 c36 20 37 22 24 47 -14 29 -153 262
              -158 267 -2 2 -95 -51 -207 -117z"/>
              <path d="M5050 2183 c-126 -65 -135 -228 -19 -344 122 -122 304 -116 369 12
              72 139 -62 335 -242 355 -45 5 -61 2 -108 -23z m147 -84 c31 -11 102 -77 119
              -110 23 -45 18 -96 -12 -126 -22 -22 -32 -25 -69 -21 -95 11 -195 103 -195
              179 0 53 9 69 44 85 30 13 66 11 113 -7z"/>
              <path d="M1643 2105 c-165 -84 -192 -298 -54 -417 159 -136 411 -18 411 192
              -1 138 -98 238 -240 247 -56 4 -73 1 -117 -22z m187 -83 c69 -34 100 -124 66
              -190 -19 -37 -75 -89 -109 -101 -94 -36 -197 33 -197 132 0 46 18 82 62 124
              57 55 116 67 178 35z"/>
              <path d="M4735 1874 c-40 -20 -62 -41 -96 -88 -36 -49 -36 -61 -1 -75 27 -11
              31 -9 79 39 58 58 90 64 128 25 21 -21 25 -33 25 -87 -1 -35 -6 -106 -13 -159
              -13 -93 -12 -97 8 -123 11 -14 24 -26 29 -26 5 0 64 45 132 99 l124 99 -26 31
              -25 30 -79 -64 c-43 -36 -80 -65 -83 -65 -2 0 2 35 10 78 19 100 14 193 -13
              229 -51 68 -133 92 -199 57z"/>
              <path d="M2040 1705 c-96 -145 -116 -193 -106 -248 15 -78 103 -155 190 -164
              95 -11 126 13 248 195 49 73 88 135 86 136 -36 26 -67 46 -72 46 -3 0 -46 -61
              -96 -135 -63 -94 -99 -139 -118 -146 -37 -14 -95 4 -121 38 -39 49 -29 81 69
              227 l89 134 -40 26 -39 26 -90 -135z"/>
              <path d="M4323 1600 c-128 -26 -222 -135 -223 -258 0 -95 45 -170 131 -217 44
              -24 66 -29 119 -29 76 1 123 18 178 68 68 62 71 81 27 187 -27 63 -42 88 -52
              85 -7 -3 -51 -22 -98 -42 -83 -36 -84 -36 -72 -62 17 -43 21 -44 71 -22 26 11
              51 20 55 20 4 0 15 -17 25 -37 l18 -37 -35 -33 c-56 -51 -145 -56 -201 -12
              -38 30 -66 91 -66 144 0 97 55 148 183 170 35 6 37 8 37 45 0 37 -2 40 -27 39
              -16 -1 -47 -5 -70 -9z"/>
              <path d="M2517 1583 c-7 -11 -167 -438 -167 -445 0 -10 83 -29 90 -21 4 4 32
              75 61 157 29 81 54 144 56 140 1 -5 16 -85 33 -179 17 -93 33 -177 36 -187 6
              -19 83 -53 95 -41 4 4 41 98 82 208 42 110 78 208 82 218 6 13 -1 21 -30 33
              -21 8 -42 13 -49 11 -6 -3 -33 -68 -61 -146 -27 -77 -53 -141 -56 -141 -4 0
              -9 23 -13 50 -6 41 -38 198 -61 297 -3 11 -17 25 -32 31 -16 5 -35 13 -44 17
              -10 3 -19 3 -22 -2z"/>
              <path d="M3932 1450 c-18 -4 -36 -10 -39 -13 -5 -6 31 -230 47 -290 10 -36 32
              -57 -158 155 l-87 98 -48 -4 c-26 -2 -50 -6 -53 -9 -6 -5 72 -467 80 -474 8
              -8 79 12 83 24 3 7 -5 68 -17 136 -13 67 -25 136 -27 152 l-4 30 27 -30 c15
              -16 73 -82 130 -147 l103 -116 43 10 c23 5 44 11 47 14 2 2 -13 100 -33 216
              -44 249 -46 258 -55 257 -3 -1 -21 -5 -39 -9z"/>
              <path d="M2960 1431 c-1 -3 -16 -111 -34 -239 -18 -128 -30 -235 -27 -236 3
              -2 53 -9 111 -16 81 -10 115 -10 148 -1 52 15 106 61 134 115 25 50 34 146 19
              204 -15 53 -67 113 -118 135 -38 17 -233 48 -233 38z m198 -123 c45 -23 66
              -63 66 -122 -2 -113 -62 -172 -163 -161 -30 3 -56 7 -58 9 -2 2 6 65 17 140
              11 75 20 142 20 148 0 13 81 3 118 -14z"/>
              <path d="M3410 1257 c0 -74 3 -182 7 -240 l6 -107 44 0 43 0 0 240 0 240 -50
              0 -50 0 0 -133z"/>
              </g>
              </svg>
              
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">I'm a proud Product School student!</h5>
                <p className="card-text">
                  Product School Pro is the most exclusive community for Product
                  Leaders. All of our members are real-world Product Leaders
                  working at top companies including Google, Facebook, Netflix,
                  Airbnb, PayPal, Uber, and Amazon.
                </p>
              </div>
            </div>
          </div>
        </Card>
        </a>
        </div>
      
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    newsletter: file(absolutePath: { regex: "/newsletter.png/" }) {
      childImageSharp {
        fixed(width: 659, height: 400, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feature: file(absolutePath: { regex: "/feature.png/" }) {
      childImageSharp {
        fixed(quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    books: file(absolutePath: { regex: "/books.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    templates: file(absolutePath: { regex: "/templates.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jargon: file(absolutePath: { regex: "/jargon.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conferences: file(absolutePath: { regex: "/conferences.png/" }) {
      childImageSharp {
        fixed(width: 550, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
