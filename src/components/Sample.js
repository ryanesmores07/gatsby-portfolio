import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Sample = ({ data }) => {
  const datas = useStaticQuery(query)
  const items = datas.info.nodes

  return (
    <div>
      {items.forEach(item => {
        item.data.forEach(ite => {
          console.log(ite)
        })
      })}
      )}
    </div>
  )
}

const query = graphql`
  {
    info: allStrapiApiJobs {
      nodes {
        data {
          attributes {
            company
            position
            date
          }
        }
      }
    }
  }
`
export default Sample
