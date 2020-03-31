import React from 'react'

import { Container, Header, Text } from './anbood.style'

const Anbood = () => {
  return(
    <Container>
      <Header>
        Aanbod
      </Header>
      <Text>
        De dienst voor onthaalouders heeft verschillende onthaalouders en samenwerkingsverbanden verspreid over Groot Antwerpen. Zie hieronder de map voor de verschillende locaties
      </Text>
      <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1r7wK__VUjEuEc27r7bq5wTKEMx8" width="1000" height="480"></iframe>
    </Container>
  )
}

export default Anbood;
