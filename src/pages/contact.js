import React, { useEffect } from 'react'
import Layout from '../components/layout'
import ContactContainer from '../components/Contact'
import SEO from "../components/seo"
import { navigate } from "gatsby"

const Contact = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <ContactContainer/>
    </Layout>
  )
}

export default Contact
