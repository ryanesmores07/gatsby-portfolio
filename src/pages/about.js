import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    info: {
      data: {
        attributes: {
          title,
          info,
          stack1,
          stack2,
          stack3,
          stack4,
          stack5,
          stack6,
        },
      },
    },
  } = data

  const {
    allFile: { nodes: image },
  } = data
  const { publicURL } = image[0]
  console.log(publicURL)

  return (
    <>
      <Seo title="Title" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={publicURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              <span>{stack1}</span>
              <span>{stack2}</span>
              <span>{stack3}</span>
              <span>{stack4}</span>
              <span>{stack5}</span>
              <span>{stack6}</span>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    info: strapiApiAbout {
      data {
        attributes {
          title
          info
          stack1
          stack2
          stack3
          stack4
          stack5
          stack6
        }
        id
      }
    }
    allFile(filter: { name: { eq: "hero" }, extension: {} }) {
      nodes {
        publicURL
      }
    }
  }
`

export default About
