import React, { useEffect } from 'react'
import { navigate } from "gatsby"
import Layout from '../../components/layout'
import WennenContainer from '../../components/Wennen'
import SEO from "../../components/seo"

const Warom = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Warom wennen?" />
      <WennenContainer/>
    </Layout>
  )
}

export default Warom