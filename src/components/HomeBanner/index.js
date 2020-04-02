import React from 'react';
import { Container, ImgContainer, Header, TextContainer, Text, ChildrenImage } from './homeBanner.style'
import children from '../../images/playschool-151938.svg'

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
        <Text>
          De dienst voor onthaalouders biedt een kleinschalige opvang aan in een veilige, huiselijke sfeer bij onthaalouders verspreid over groot Antwerpen.
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>
          De dienst richt zich hoofdzakelijk op kinderen die nog niet naar de kleuterschool gaan en kinderen die voor-en naschools moeten opgevangen worden.
        </Text>
      </TextContainer>
    </Container>
  )
}

export default HomeBanner
