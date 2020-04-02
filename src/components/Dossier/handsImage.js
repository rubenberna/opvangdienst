import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 350px;
  height: 100%;
  opacity: 0.8;
  @media (max-width : 992px) {
    height: 220px;
  }
`

const CoronaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hands.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default CoronaImg
