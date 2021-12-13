import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    info: strapiApiJobs {
      data {
        attributes {
          position
          company
          date
          desc1
          desc2
          desc3
          desc4
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    info: { data: jobs },
  } = data

  const [value, setValue] = React.useState(0)
  const {
    attributes: { company, position, date, desc1, desc2, desc3, desc4 },
  } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{desc1}</p>
          </div>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{desc2}</p>
          </div>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{desc3}</p>
          </div>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs

{
  /* {jobs.forEach(job => {
            const items = job.data
            items.map((item, index) => {
              const { company } = item.attributes

              return (
                <button key={index} className="job-btn">
                  <h4>{item.attributes.company}</h4>
                </button>
              )
            })
          })} */
}
