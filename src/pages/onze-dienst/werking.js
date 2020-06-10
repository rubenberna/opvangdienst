import React, { useEffect } from "react"
import Layout from '../../components/layout'
import WerkingContainer from '../../components/Werking'
import SEO from "../../components/seo"
import { navigate } from "gatsby"

const Werking = () => {
  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <Layout>
      <SEO title="Werking" />
      <WerkingContainer />
    </Layout>
  )
}

export default Werking
