import React from 'react'

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
          Wij blijven wel steeds bereikbaar via email op info@dog-gezinsbond.be of op het telefoonnummer 03/226.87.91 behalve op woensdag.
          indien u noodopvang nodig heeft kan u ons zeker contacteren.
        </TextContainer>
      </Banner>
    </Container>
  )
}

export default CoronaBanner