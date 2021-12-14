import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const gatsby = () => {
  return (
    <>
      <Seo
        title="Gatsby"
        description="Vaporware YOLO kinfolk iceland. Tbh swag fashion axe brooklyn
          literally +1 shoreditch. Letterpress heirloom ethical gluten-free
          disrupt. VHS post-ironic godard, tumeric ugh next level farm-to-table
          tilde. Jean shorts next level sartorial, health goth poutine offal
          flexitarian pour-over messenger bag."
      />
      <main className="project-template-page">
        <h2>GATSBY PROJECT</h2>
        <p>
          Vaporware YOLO kinfolk iceland. Tbh swag fashion axe brooklyn
          literally +1 shoreditch. Letterpress heirloom ethical gluten-free
          disrupt. VHS post-ironic godard, tumeric ugh next level farm-to-table
          tilde. Jean shorts next level sartorial, health goth poutine offal
          flexitarian pour-over messenger bag.
        </p>
      </main>
    </>
  )
}

export const querty = graphql`
  query MyQuery2 {
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

export default gatsby
