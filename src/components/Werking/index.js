import React from 'react'

import { Container, Header, TextContainer, List, BabyPlaying, DownloadBtn } from './werking.style'

import hhrPDF from '../../assets/HHR.pdf'

const Werking = () => {
  return (
    <Container>
      <TextContainer>
        <Header>
          Werking
        </Header>
        <p>
          De individuele benadering van elk kind centraal, met respect voor de eigenheid van elk kind.
        </p>
        <p>
          Het is belangrijk dat de onthaalouders ervoor zorgen dat de kinderen:
          <List>
            <li>Warmte en geborgenheid vinden</li>
            <li>Voldoende kansen krijgen om zich spelenderwijs te ontwikkelen</li>
            <li>Gestimuleerd worden in hun zelfredzaamheid</li>
          </List>
        </p>
        <p>
          De onthaalouder heeft ook oog voor verzorging, gezondheid, voeding, slaap- en rustmomenten.
        </p>
        <BabyPlaying alt='baby playing' />
        <p>
          De kinderbegeleiders krijgen vanuit de dienst huisbezoeken op regelmatige tijdstippen. Deze huisbezoeken zijn onaangekondigd. Er wordt gezorgd voor een uitgebreid vormingsaanbod en de kinderbegeleiders krijgen verder administratieve en pedagogische ondersteuning.
        </p>
        <p>
          Als dienst respecteren wij iedereen en hanteren we de non-discriminatieregel. De samenwerking tussen alle partijen is zeer belangrijk en vertrekt vanuit wederzijds respect en vertrouwen.
        </p>
      </TextContainer>
      <DownloadBtn href={hhrPDF} className='btn btn-info' download>Huishoudelijk Reglement</DownloadBtn>
    </Container>
  )
}

export default Werking;