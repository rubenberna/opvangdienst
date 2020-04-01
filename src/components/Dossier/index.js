import React from 'react'
import { Container, Header, TextBlock, List } from './dossier.style'
import HandsImage from './handsImage'

const DossierContainer = () => {
  return (
    <Container>
      <Header>
        Dossier
      </Header>
      <TextBlock>
        <p>
          Het dossier kan je bij ons maximaal twee maanden voor de start van de opvang in orde brengen. Je brengt best volgende documenten mee:
        </p>
        <List>
          <li>Attest inkomenstarief van Kind en Gezin (https://mijn.kindengezin.be/) OF identiteitskaart   
          en pincode </li>
          <li>Attest van gezinssamenstelling (kan ook aangevraagd worden met je e-ID en pincode) </li>
          <li>Contactgegevens van noodpersonen</li>
          <li>Contactgegevens van huisarts en kinderarts</li>
        </List>
      </TextBlock>
      <HandsImage alt='hands image'/>
      <TextBlock marginTop={'20px'}>
        <p>
          De ouders worden geïnformeerd over de werking van de dienst en de verantwoordelijken trachten het opvangaanbod af te stemmen op hun verwachtingen. Zij worden ook op de hoogte gebracht van alle wijzigingen in de werking van de dienst.
        </p>
        <p>
          Wij rekenen als dienst, geen extra kosten aan voor administratie of afvalverwerking.
        </p>
        <p>
          De ouder is verantwoordelijk om alle wijzigingen door te geven aan de dienst en aan de onthaalouder. Dit zowel over gegevenswijziging, scheiding, medische gegevens, … De dienst waakt erover dat de verzamelde persoon- en medische gegevens efficiënt worden beheerd met respect voor de privacy van de onthaalouders, ouders en de kinderen.
        </p>
        <p>
          Indien je de opvang wenst stop te zetten, dien je dit <span style={{textDecoration: 'underline'}}>vier weken op voorhand</span> te melden aan de dienst en de onthaalouder. Zoniet kan er een verbrekingsvergoeding aangerekend worden.
        </p>
      </TextBlock>
    </Container>
  )
}

export default DossierContainer