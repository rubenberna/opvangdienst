import React from 'react'

import { Container, Header, TextContainer, List, BabyPlaying, DownloadBtn, Text } from './werking.style'

import hhrPDF from '../../assets/HHR.pdf'

const Werking = () => {
  return (
    <Container>
      <TextContainer>
        <Header>
          Werking
        </Header>
        <Text weight='600' margin='20px 0 0 0'>
          De Dienst voor Opvanggezinnen Gezinsbond Gewest Antwerpen heeft aangesloten kinderbegeleiders in de districten Antwerpen, Berchem, Borgerhout, Deurne, Hoboken en Merksem die kleinschalige opvang (max. 8 kindjes) organiseren in hun eigen woning.
        </Text>
        <Text>
          Als uw kindje wordt opgevangen door een kinderbegeleider die aangesloten is bij de dienst, dan betaalt u volgens uw inkomen. Op de website van <a href='https://www.kindengezin.be/kinderopvang/ouder/prijs/inkomenstarief/' target='_blank' rel='noopener noreferrer'>Kind en Gezin</a> vindt u meer informatie, kan u de dagprijs volgens inkomen berekenen en het attest inkomenstarief aanvragen.
        </Text>
        <Text>
          De kinderbegeleiders vangen kinderen op van 0 tot 3 jaar en dit op weekdagen van 7.30 tot 17.30 uur. Flexibele opvanguren zijn steeds bespreekbaar met de kinderbegeleider. 
        </Text>
        <Text>
          Als een kinderbegeleider ziek of afwezig is, kan uw kindje terecht bij een vervangende kinderbegeleider. Sommige kinderbegeleiders vangen ook schoolgaande kinderen of kinderen met specifieke zorgen op.
        </Text>
        <Text>
          Tijdens de opvang staat de individuele benadering van elk kind centraal, met respect voor de eigenheid van elk kind. 
        </Text>
        <BabyPlaying alt='baby playing' />
        <Text>
          Het is belangrijk dat de onthaalouders ervoor zorgen dat de kinderen:
          <List>
            <li>Warmte en geborgenheid vinden</li>
            <li>Voldoende kansen krijgen om zich spelenderwijs te ontwikkelen</li>
            <li>Gestimuleerd worden in hun zelfredzaamheid</li>
          </List>
        </Text>
        <Text>
          De onthaalouder staat bovendien in voor verzorging, gezondheid, voeding, slaap- en rustmomenten.
        </Text>
        <Text>
          De kinderbegeleiders krijgen vanuit de dienst huisbezoeken op regelmatige tijdstippen. Deze huisbezoeken zijn onaangekondigd. Er wordt gezorgd voor een uitgebreid vormingsaanbod en de kinderbegeleiders krijgen verder administratieve en pedagogische ondersteuning.
        </Text>
        <Text>
          Als dienst respecteren wij iedereen en hanteren we de non-discriminatieregel. De samenwerking tussen alle partijen is zeer belangrijk en vertrekt vanuit wederzijds respect en vertrouwen.
        </Text>
        <Text>
          Voor een gedetailleerde beschrijving van onze werking kan u hieronder ons huishoudelijk reglement consulteren. 
        </Text>
      </TextContainer>
      <DownloadBtn href={hhrPDF} className='btn btn-info' download>Huishoudelijk Reglement</DownloadBtn>
    </Container>
  )
}

export default Werking;