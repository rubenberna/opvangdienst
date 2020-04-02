import React from 'react'

import { Container, Header, Text, Map } from './anbood.style'

const Anbood = () => {
  return(
    <Container>
      <Header>
        Aanbod
      </Header>
      <Text>
        De dienst voor onthaalouders heeft verschillende onthaalouders en samenwerkingsverbanden verspreid over Groot Antwerpen. Zie hieronder de map voor de verschillende locaties
      </Text>
      <Map title="map" src="https://www.google.com/maps/d/embed?mid=1r7wK__VUjEuEc27r7bq5wTKEMx8"></Map>
    </Container>
  )
}

export default Anbood;
