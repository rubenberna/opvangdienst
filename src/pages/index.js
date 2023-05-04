import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from '../styles/home'
import HomeBanner from '../components/HomeBanner'
import Maintenance from '../components/Maintenance'

let maintenance = false
const IndexPage = () => {

  function render() {
    if(maintenance) return <Maintenance/>

    return (
      <Layout>
        <SEO title="Gezinsbond Antwerpen" />
        <Container>
          <HomeBanner />
        </Container>
      </Layout>
    )
  }

  return render()

}

export default IndexPage
