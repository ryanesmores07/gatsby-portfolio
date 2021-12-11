import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    info: allStrapiApiJobs {
      nodes {
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
  }
`

const Jobs = () => {
  const item = useStaticQuery(query)
  const {
    info: { nodes: jobs },
  } = item //destructure everything from here ok?

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.forEach(job => {
            const items = job.data
            items.map((item, index) => {
              const { company } = item.attributes
              console.log(company)
              return (
                <button key={index} className="job-btn">
                  <h4>{company}</h4>
                </button>
              )
            })
          })}
          <button className="job-btn">
            <h4>yawa</h4>
          </button>
        </div>
        {/* job info */}
        <article className="job-info">
          {jobs.map((job, index) => {
            const {
              attributes: {
                position,
                company,
                date,
                desc1,
                desc2,
                desc3,
                desc4,
              },
            } = job.data[0]

            return (
              <>
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
              </>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
