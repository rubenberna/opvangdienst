import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from '../styles/home'
import CoronaBanner from '../components/CoronaBanner'
import HomeBanner from '../components/HomeBanner'

const IndexPage = () => (
  <Layout>
    <SEO title="Gezinsbond Antwerpen" />
    <Container>
      <CoronaBanner />
      <HomeBanner />
    </Container>
  </Layout>
)

export default IndexPage
