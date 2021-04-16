import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`matt costa`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Matt is a storytelling focused Creative Director with a background in filmmaking.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">Bio</h3>
          <p>
          Matt Costa is a creative director for Riot Games.  He focuses primarily on story focused marketing campaigns for League of Legends.  On those campaigns he also writes and directs story content.  As a storyteller, Matt focuses on telling the stories behind the action in the hopes of developing a deeper connection between the champions and the players. One of his guiding principles is that champions are people too.  
          </p>
          <p>
          In addition to his work for Riot, Matt is developing multiple long form storytelling projects.  His background is in film and animation, with a degree in Film Studies from the University of Pittsburgh and a Masters Degree from Carnegie Mellon University in Entertainment Technology, a joint degree between the Schools of Drama and Computer Science.  Matt has also been a long time volunteer on the committee for the Siggraph Computer Animation Festival.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "aboutme2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
