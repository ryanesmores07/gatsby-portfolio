import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const react = () => {
  return (
    <>
      <main className="project-template-page">
        <h2>REACT PROJECT</h2>
        <p>
          Tumblr intelligentsia brunch, heirloom crucifix tousled butcher poke
          fanny pack lumbersexual forage. Keytar portland lyft mixtape fixie
          tofu vice blue bottle. Ethical waistcoat flannel vape banjo you
          probably haven't heard of them mlkshk, mumblecore umami fam slow-carb.
          Shaman fashion axe mlkshk bitters quinoa cornhole pok pok pabst cray
          cronut snackwave dreamcatcher you probably haven't heard of them.
        </p>
      </main>
    </>
  )
}

export const querty = graphql`
  query MyQuery4 {
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

export default react
