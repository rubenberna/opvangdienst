import React from "react"
import { Link } from "gatsby"

import { Banner, Container, Header, ImgContainer, TextContainer } from "./coronaBanner.style"
import VirusImg from "./virusImg"

const LinkStyle = {
  fontWeight: 600,
  color: "#9e9e9e",
  textDecoration: "none",
}

const CoronaBanner = () => {
  return (
    <Container>
      <Header>
        Corona update:
      </Header>
      <Banner>
        <ImgContainer>
          <VirusImg alt='virus'/>
        </ImgContainer>
        <TextContainer>
          <p>Omwille van de coronacrisis kunnen de permanenties niet doorgaan. Wij werken enkel op afspraak.</p>
          <p>U kan ons <Link to='/contact' style={LinkStyle}>bereiken</Link> op het telefoonnummer 03/2268791 of via
            email op <a href='mailto:info@dog-gezinsbond.be' target='_blank'
                        rel="noopener noreferrer">info@dog-gezinsbond.be</a> voor meer info of om een afspraak te maken.
          </p>
        </TextContainer>
      </Banner>
    </Container>
  )
}

export default CoronaBanner