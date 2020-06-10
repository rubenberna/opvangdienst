import React, { useEffect } from 'react'
import { navigate } from "gatsby"
import Layout from '../../components/layout'
import InschrijvingContainer from '../../components/Inschrijving'
import SEO from "../../components/seo"

const Inschrijving = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Inschrijving" />
      <InschrijvingContainer/>
    </Layout>
  )
}

export default Inschrijving