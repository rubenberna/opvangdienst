import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  @media (max-width : 992px) {
    width: 170px;
    height: 170px;
  }
`

const CoronaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sleeping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default CoronaImg
