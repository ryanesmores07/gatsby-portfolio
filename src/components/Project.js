import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ key, index, project, images }) => {
  return (
    <article className="project">
      {images.map(image => {
        const {
          childImageSharp: { gatsbyImageData: img },
        } = image

        return (
          <GatsbyImage
            image={getImage(img)}
            className="project-img"
            alt={project.title}
          />
        )
      })}
      <GatsbyImage
        // image={getImage(image)}
        className="project-img"
        alt={project.title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${project.slug}`} className="project-slug">
          <h3>{project.title}</h3>
        </Link>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          <span key={project.key}>{project.stack1}</span>
          <span key={project.key}>{project.stack2}</span>
        </div>
        <div className="project-links">
          <a href={project.github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={project.url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
