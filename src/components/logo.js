import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImg = styled(Img)`
  width: 82px;
  height: 82px;
  object-fit: contain;
  border-radius: 100%;
  @media (max-width : 992px) {
    width: 50px;
    height: 50px;
    border-radius: 100%
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo
