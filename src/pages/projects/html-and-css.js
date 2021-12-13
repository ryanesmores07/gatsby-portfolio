import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const htmlcss = () => {
  return (
    <>
      <main className="project-template-page">
        <h2>HTML&CSS</h2>
        <p>
          Four loko heirloom 90's, mustache readymade microdosing lumbersexual
          vexillologist synth. Sartorial shabby chic cloud bread, green juice
          meditation bitters before they sold out brunch. Four dollar toast
          retro pitchfork biodiesel cronut, waistcoat direct trade +1
          williamsburg cornhole. Health goth williamsburg cliche lumbersexual
          listicle small batch, cardigan franzen snackwave knausgaard poutine
          humblebrag put a bird on it godard. Godard chillwave put a bird on it
          locavore salvia echo park copper mug roof party dreamcatcher kale
          chips listicle.
        </p>
      </main>
    </>
  )
}

export const querty = graphql`
  query MyQuery3 {
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
export default htmlcss
