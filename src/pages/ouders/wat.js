import React from 'react'
import Layout from '../../components/layout'
import WatTeBrengenContainer from '../../components/WatTeBrengen'
import SEO from "../../components/seo"

const Wat = () => {
  return (
    <Layout>
      <SEO title="Wat te brengen" />
      <WatTeBrengenContainer/>
    </Layout>
  )
}

export default Wat