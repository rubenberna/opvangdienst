import React from 'react'

import { Container, Header, TextContainer, Text, BabyPlaying } from './werking.style'

const Werking = () => {
  return(
    <Container>
      <TextContainer>
        <Header>
          Werking
        </Header>
        <Text>
        De individuele benadering van elk kind centraal, met respect voor de eigenheid van elk kind.
        </Text>
        <Text>
          Het is belangrijk dat de onthaalouders ervoor zorgen dat de kinderen:
          <ul>
            <li>Warmte en geborgenheid vinden</li>
            <li>Voldoende kansen krijgen om zich spelenderwijs te ontwikkelen </li>
            <li>Gestimuleerd worden in hun zelfredzaamheid</li>
          </ul>
        </Text>
        <Text>
          De onthaalouder heeft ook oog voor verzorging, gezondheid, voeding, slaap- en rustmomenten.
        </Text>
        <BabyPlaying/>
        <Text>
          De kinderbegeleiders krijgen vanuit de dienst huisbezoeken op regelmatige tijdstippen. Deze huisbezoeken zijn onaangekondigd. Er wordt gezorgd voor een uitgebreid vormingsaanbod en de kinderbegeleiders krijgen verder administratieve en pedagogische ondersteuning.
        </Text>
        <Text>
          Als dienst respecteren wij iedereen en hanteren we de non-discriminatieregel. De samenwerking tussen alle partijen is zeer belangrijk en vertrekt vanuit wederzijds respect en vertrouwen.
        </Text>
      </TextContainer>
      <br/>
    </Container>
  )
}

export default Werking;
