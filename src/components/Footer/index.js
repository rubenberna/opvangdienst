import React from 'react'
import { Wrapper, Container, Brand, Details } from './footer.style'

const Footer = () => {
  return(
    <Wrapper>
      <Container>
        <Brand>
        Dienst voor opvanggezinnen – Gezinsbond Gewest Antwerpen
        </Brand>
        <Details>
          <p>Schermersstraat 32, 2000 Antwerpen</p>
          <p>03 226 87 91</p>
          <p style={{ marginBottom: 0 }}><a href='mailto:info@dog-gezinsbond.be'>info@dog-gezinsbond.be</a></p>
        </Details>
      </Container>
    </Wrapper>
  )
}

export default Footer;
