import React from 'react'
import { Container, Header, TextBlock, ItalicText } from './inschrijving.style'

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
          Klik in de rechter bovenhoek op aanmelden en maak je A-profiel aan. Met je A-profiel kan je via de KOZA een aanvraag indienen voor het opvanginitiatief van jouw keuze. Je kan ook meerdere aanvragen indienen.
        </p>
        <ItalicText>
          Beschik je niet over een e-ID kaartlezer, of heb je hulp nodig bij je zoektocht?
        </ItalicText>
        <p>
          Je kan steeds langskomen op ons kantoor tijdens onze permanentie uren op maandag van 12.00u tot 15.00u of op donderdag van 13.00u tot 15.00u.
        </p>
        <p>
          Je kan ook een afspraak maken via <a href="mailto:info@dog-gezinsbond.be" target="_blank" rel="noopener noreferrer">info@dog-gezinsbond.be</a> of op 03 226 87 91.
        </p>
        <p>
          Na de inschrijving via de KOZA zal je een mail ontvangen of de betreffende onthaalouder al dan niet een plaats vrij heeft of wordt er een alternatief voorstel gedaan. Je krijgt de contactgegevens van de onthaalouder en er wordt gevraagd om binnen de twee weken contact op te nemen met haar voor een kennismakingsgesprek.
        </p>
        <p>
          Indien je tevreden bent met het opvangadres kan je dit bij ons bevestigen telefonisch of per mail. Je zal worden uitgenodigd bij ons op de dienst om je dossier aan te maken voor de start van de opvang.
        </p>

      </TextBlock>
    </Container>
  )
}

export default InschrijvingContainer