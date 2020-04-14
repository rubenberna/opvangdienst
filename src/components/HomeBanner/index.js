import React from 'react'

import { Container, ImgContainer, Header, TextContainer, Text, ChildrenImage, StyledLink, Frame, FrameImage } from './homeBanner.style'
import children from '../../images/playschool.svg'
import fenceImg from '../../images/fence.svg'
import kidsImg from '../../images/kids.svg'
import parentsImg from '../../images/parents.svg'
import caretakerImg from '../../images/caretaker.svg'

const HomeBanner = () => {
  return (
    <Container>
      <ImgContainer>
        <ChildrenImage src={children} alt='children-playing'/>
      </ImgContainer>
      <Header>
        Dienst opvanggezinnen - Gezinsbond Antwerpen
      </Header>
      <TextContainer>
      <Frame>
        <FrameImage src={fenceImg} alt='veilig'/>
        <Text>
          De dienst voor onthaalouders biedt een kleinschalige opvang aan in een veilige, huiselijke sfeer bij onthaalouders verspreid over groot Antwerpen.
        </Text>
      </Frame>
      <Frame>
        <FrameImage src={kidsImg} alt='kinderen'/>
        <Text>
          De dienst richt zich hoofdzakelijk op kinderen die nog niet naar de kleuterschool gaan en kinderen die voor-en naschools moeten opgevangen worden.
        </Text>
      </Frame>
      </TextContainer>
      <TextContainer>
        <Frame>
          <FrameImage src={parentsImg} alt='ouders'/>
          <Text>Ben je op zoek naar een opvangplaats of zoek je meer info over onze gezinsopvang kijk dan zeker <StyledLink to='/ouders/inschrijving'>HIER</StyledLink>.
          </Text>
        </Frame>
        <Frame>
          <FrameImage src={caretakerImg} alt='onthaalouder'/>
          <Text>Ben je geïnteresseerd om je aan te sluiten als onthaalouder bij onze dienst of wens je meer info hierover, neem dan zeker <StyledLink to='/onthaalouder'>HIER</StyledLink> een kijkje.
          </Text>
        </Frame>
      </TextContainer>     
    </Container>
  )
}

export default HomeBanner
