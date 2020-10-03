import React from "react"
import Layout from "../../components/layout"
import DossierContainer from "../../components/Dossier"
import SEO from "../../components/seo"

const Dossier = () => {

  return (
    <Layout>
      <SEO title="Dossier"/>
      <DossierContainer/>
    </Layout>
  )
}

export default Dossier