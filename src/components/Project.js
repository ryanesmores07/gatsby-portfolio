import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  images,
  index,
  slug,
}) => {
  return (
    <article className="project">
      <div className="project info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
      </div>
    </article>
  )
}

export default Project
