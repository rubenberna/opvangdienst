import React from 'react'
import { Container, Header, TextBlock, ImageFrame, List } from './watTeBrengen.style'
import SleepingImg from './sleepingImg.js'

const WatTeBrengenContainer = () => {
  return (
    <Container>
      <Header>
        Wat mee te brengen?
      </Header> 
      <ImageFrame>
        <TextBlock>
          <p>U dient volgende items mee te brengen naar de onthaalouder:</p>
          <List>
            <li>Luiers</li>
            <li>Vochtige doekjes</li>
            <li>Reservekledij</li>
            <li>Thermometer</li>
            <li>Koortswerend middel</li>
            <li>Fopspeen en eventueel een knuffel</li>
            <li>Zalf voor luieruitslag</li>
          </List>
        </TextBlock>
        <SleepingImg alt='sleeping image'/>
      </ImageFrame>
    </Container>
  )
}

export default WatTeBrengenContainer