import React from 'react'
import { Link } from 'gatsby'

import { Container, Header, Banner, ImgContainer, TextContainer } from './coronaBanner.style'
import VirusImg from './virusImg'

const CoronaBanner = () => {
  return (
    <Container>
      <Header>
        Corona update:
      </Header>
      <Banner>
        <ImgContainer>
          <VirusImg />
        </ImgContainer>
        <TextContainer>
          Omwille van de corona crisis zijn onze kantoren gesloten en kunnen er tot nader orde geen permanenties of afspraken doorgaan.
          Wij blijven wel steeds bereikbaar via email op <a href='mailto:info@dog-gezinsbond.be' target='_blank' rel="noopener noreferrer">info@dog-gezinsbond.be</a> of op het telefoonnummer 03/226.87.91 behalve op woensdag.
          indien u noodopvang nodig heeft kan u <Link to='/contact' style={{ fontWeight: 600, color: '#9e9e9e', textDecoration: 'none'}}>ons zeker contacteren</Link>.
        </TextContainer>
      </Banner>
    </Container>
  )
}

export default CoronaBanner