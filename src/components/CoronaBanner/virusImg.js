import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
  @media (max-width : 992px) {
    display: none;
  }
`

const CoronaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "corona-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default CoronaImg
