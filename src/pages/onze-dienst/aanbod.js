import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/layout'
import AnboodContainer from '../../components/Anbood'
import SEO from "../../components/seo"

const Anbood = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Aanbod" />
      <AnboodContainer/>
    </Layout>
  )
}

export default Anbood
