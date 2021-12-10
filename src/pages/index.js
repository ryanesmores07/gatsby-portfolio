import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Sample from "../components/Sample"
const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Hero />
        <Services />
        <Sample />
      </main>
    </>
  )
}

export default IndexPage
