import React from 'react'
import { Container, Header, TextBlock, ItalicBoldText } from './inschrijving.style'

const InschrijvingContainer = () => {
  return (
    <Container>
      <Header>
        Inschrijving
      </Header>
      <TextBlock>
        <p>
          Wij werken via het centraal aanmeldpunt voor kinderopvang van Stad Antwerpen (KOZA).
        </p>
        <p>
          Je kan je online registreren via deze link: <a href='https://www.antwerpen.be/nl/kinderopvangzoeker#/' target='_blank' rel="noopener noreferrer"> https://www.antwerpen.be/nl/kinderopvangzoeker#/</a>
        </p>
        <p>
          Klik in de rechterbovenhoek op aanmelden en maak je A-profiel aan. Met je A-profiel kan je via de KOZA een aanvraag indienen voor het opvanginitiatief van jouw keuze. Je kan ook meerdere aanvragen indienen.
        </p>
        <p>
          Na de inschrijving via de KOZA zal je een mail ontvangen of de betreffende onthaalouder al dan niet een plaats vrij heeft of wordt er een alternatief voorstel gedaan. Je krijgt de contactgegevens van de onthaalouder en er wordt gevraagd om binnen de twee weken contact op te nemen met haar voor een kennismakingsgesprek.
        </p>
        <p>
          Indien je tevreden bent met het opvangadres kan je dit bij ons bevestigen telefonisch of per mail. Nadien kan de inschrijving bij ons op kantoor of digitaal in orde worden gebracht.
        </p>
        <ItalicBoldText>
          Beschik je niet over een e-ID kaartlezer, of heb je hulp nodig bij je zoektocht?
        </ItalicBoldText>
        <p>
          Je kan ook een afspraak op kantoor maken via <a href="mailto:info@dog-gezinsbond.be" target="_blank" rel="noopener noreferrer">info@dog-gezinsbond.be</a> of op 03 226 87 91.
        </p>
      </TextBlock>
    </Container>
  )
}

export default InschrijvingContainer