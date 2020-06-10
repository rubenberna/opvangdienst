import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import DossierContainer from '../../components/Dossier'
import SEO from "../../components/seo"
import { navigate } from "gatsby"

const Dossier = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Dossier" />
      <DossierContainer/>
    </Layout>
  )
}

export default Dossier