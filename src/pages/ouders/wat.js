import React, { useEffect } from "react"
import Layout from '../../components/layout'
import WatTeBrengenContainer from '../../components/WatTeBrengen'
import SEO from "../../components/seo"
import { navigate } from "gatsby"

const Wat = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Wat te brengen" />
      <WatTeBrengenContainer/>
    </Layout>
  )
}

export default Wat