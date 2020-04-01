import React from 'react'
import { Container, Header, TextBlock, ImageFrame } from './onthaalouder.style'
import onthaalouderImg from '../../images/onthaalouder.jpg'
import OOImage from './ooImage'

const OnthaalouderContainer = () => {
  return (
    <Container>
      <Header>
        Wie?
      </Header>
      <TextBlock>
        <p>
          De onthaalouder doet doorgaans opvang in haar eigen woning. Ook zijn er drie groepsopvang initiatieven bij de dienst voor onthaalouders – Gezinsbond Gewest Antwerpen. Al onze onthaalouders hebben een hart voor kinderen en een groot respect voor ieders eigenheid.
        </p>
      </TextBlock>
      <ImageFrame>
        <img alt='onthaalouderImg' src={onthaalouderImg} style={{ objectFit: 'contain', width: '50%', filter: 'opacity(0.8)', borderRadius: '5px' }} />
        <TextBlock style={{ width: '48%' }}>
          <p>
            De onthaalouders worden opgevolgd door de verantwoordelijke die op regelmatige tijdstippen onverwachts op huisbezoek komt. Ook kan elke locatie zorginspectie van Kind en Gezin over de vloer krijgen. Elk opvanginitiatief werd vergund door Kind en Gezin en volgt de regelgeving.
        </p>
          <p>
            De onthaalouder wordt aangenomen na een objectieve selectieprocedure en kan pas van start gaan na het volgen van de cursus ‘kennismaking met de gezinsopvang’ en ‘werken in de gezinsopvang’. Verder zijn de onthaalouders bereid tot het volgen van vormingen die aangeboden worden door de dienst voor onthaalouders – Gezinsbond Gewest Antwerpen.
        </p>
        </TextBlock>
      </ImageFrame>
      <Header>
        Kandidaat onthaalouders
      </Header>
      <TextBlock>
        <p>
          Een kandidaat onthaalouder kan steeds haar motivatiebrief en CV doorsturen naar <a href='mailto:info@dog-gezinsbond.be' target="_blank" rel="noopener noreferrer">info@dog-gezinsbond.be</a> De kandidatuur zal besproken worden op de teamvergadering. Indien zij/hij in aanmerking zou komen, wordt hij/zij uitgenodigd voor een verkennend gesprek.
        </p>
        <p>
          Na dit verkennend gesprek zal de kandidaat een kennisvragenlijst meekrijgen die hij/zij dient terug te mailen voor de afgesproken datum indien hij/zij nog interesse heeft om te werken als onthaalouder. Er vindt nog een huisbezoek plaats met twee verantwoordelijke als kennismaking met de woning van de kandidaat onthaalouder. Hij/zij wordt opnieuw uitgenodigd op het kantoor voor het invullen van een kennisvragenlijst.
        </p>
         <p>
          De kandidaat kan pas starten als hij/zij de module ‘kennismaking met de gezinsopvang’ en ‘werken in de gezinsopvang’ heeft gevolgd indien het diploma niet voldoet aan de vereisten van kind en gezin.
        </p>
        <p>
          Als onthaalouder werkt men in een <a href='https://www.vivosocialprofit.org/-helpdesk-onthaalouders' rel="noopener noreferrer" target='_blank' > sociaal statuut</a>.
        </p>
        <p>
          U kan ook gaan kijken naar volgende website voor meer informatie: <a href='http://www.ikwordonthaalouder.be/ ' target='_blank' rel="noopener noreferrer" >http://www.ikwordonthaalouder.be/</a> of op <a href='https://www.kindengezin.be/kinderopvang/starter/' target='_blank' rel="noopener noreferrer">https://www.kindengezin.be/kinderopvang/starter/</a>
        </p>
      </TextBlock>
      <OOImage/>
    </Container>
  )
}

export default OnthaalouderContainer;
