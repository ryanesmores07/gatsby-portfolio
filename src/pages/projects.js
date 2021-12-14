import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({ data }) => {
  const {
    info: { data: projects },
  } = data
  const {
    allFile: { nodes: images },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} images={images} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    info: strapiApiProjects {
      data {
        attributes {
          description
          featured
          github
          slug
          stack1
          stack2
          title
          url
        }
        id
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

export default ProjectsPage
