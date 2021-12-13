import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const angular = ({ data }) => {
  const item = data.strapiApiProjects.data

  return (
    <>
      <main className="project-template-page">
        <h2>angular project</h2>
        <p>
          I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights
          slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb
          health goth kickstarter cardigan. Roof party pour-over swag pork belly
          glossier DIY farm-to-table godard locavore. Chicharrones gastropub
          slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn
          thundercats health goth.
        </p>
      </main>
    </>
  )
}

export const querty = graphql`
  query MyQuery {
    strapiApiProjects {
      data {
        attributes {
          description
          title
        }
      }
    }
  }
`

export default angular
