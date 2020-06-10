import React, { useEffect } from 'react'
import Layout from '../components/layout'
import OnthaalouderContainer from '../components/Onthaalouder'
import SEO from "../components/seo"
import { navigate } from "gatsby"

const Onthaalouder = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Onthaalouder" />
      <OnthaalouderContainer/>
    </Layout>
  )
}

export default Onthaalouder
