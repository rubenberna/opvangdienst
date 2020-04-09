/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  
  const { site, placeholderImage} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
    `
  )
  console.log(placeholderImage);

  const metaDescription = description || site.siteMetadata.description
  const image = placeholderImage.childImageSharp && placeholderImage.childImageSharp.fluid ? `${site.siteMetadata.siteUrl}${placeholderImage.childImageSharp.fluid.src}`: null
  

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${site.siteMetadata.title}%s | `}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: 'google-site-verification', content: 'OJskwD86GX_y9vnxRHBP5MnDxo-q3mfv_CD72szBpBc' },
      ]
      .concat(
        placeholderImage
          ? [
            {
              property: "og:image",
              content: image,
            },
            {
              property: "og:image:width",
              content: '1492px',
            },
            {
              property: "og:image:height",
              content: '1039px',
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
          ]
          : [
            {
              name: "twitter:card",
              content: "summary",
            },
          ]
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `nl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  })
}

export default SEO
