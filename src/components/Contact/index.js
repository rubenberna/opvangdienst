import React from 'react'
import {
  Container,
  Header,
  Box,
  ImgContainer,
  ContactsList,
  ListTitle,
  List
 } from './contact.style'
import Logo from './logoBig'

const Contact = () => {
  return(
    <>
    <Container>
      <Header>Contact info</Header>
      <Box>
        <ContactsList>
          <ListTitle>
            Dienst voor opvanggezinnen – Gezinsbond Gewest Antwerpen
          </ListTitle>
          <List>
            <li>Schermersstraat 32</li>
            <li>2000 Antwerpen</li>
            <li>03 226 87 91</li>
            <li><a href='mailto:info@dog-gezinsbond.be'>info@dog-gezinsbond.be</a></li>
          </List>
          <hr/>
          <ListTitle>
            Permanentie op:
          </ListTitle>
          <ul>
            <li>Maandag van 12u tot 15u</li>
            <li>Donderdag van 13u tot 15u</li>
            <li>Op afspraak</li>
          </ul>
        </ContactsList>
        <ImgContainer>
          <Logo />
        </ImgContainer>
      </Box>
    </Container>

    </>
  )
}

export default Contact;
