import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Banner, ImgContainer, TextContainer } from '../styles/home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Banner>
      <ImgContainer>
        <Image />
      </ImgContainer>
      <TextContainer>
        Quis exercitation incididunt eu occaecat. Aliqua occaecat cillum est labore ullamco excepteur enim. Nulla velit irure commodo et eiusmod voluptate dolore ullamco minim veniam. Do enim velit quis consequat esse ullamco voluptate minim enim laboris eu sit sit anim. Consequat Lorem aute proident ullamco nostrud voluptate Lorem sint do commodo consectetur. Ad voluptate veniam in tempor.

        Culpa sint ex minim tempor nisi culpa voluptate. Fugiat do labore et ut. Amet consequat exercitation qui officia velit cupidatat nisi excepteur. Occaecat anim deserunt nisi veniam et nulla amet ipsum commodo cillum magna. Laboris dolore excepteur sit enim aute. Reprehenderit irure sunt id laborum non deserunt anim ipsum esse duis minim nulla minim. Officia et veniam anim est aliqua.
      </TextContainer>
    </Banner>
  </Layout>
)

export default IndexPage
