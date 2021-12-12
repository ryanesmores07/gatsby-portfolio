import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allFile: { nodes: images },
  } = data

  const {
    info: { nodes: projects },
  } = data
  console.log(projects)

  return (
    <>
      <Seo />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          title="featured projects"
          showLink
          projects={projects}
          images={images}
        />
      </main>
    </>
  )
}

export const query = graphql`
  {
    info: allStrapiApiProjects(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
      nodes {
        data {
          attributes {
            title
            description
            featured
            github
            slug
            stack1
            stack2
            url
          }
          id
        }
      }
    }
    allFile(filter: { extension: { eq: "jpg" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default IndexPage
