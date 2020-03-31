import React from 'react'
import { Container, Header, DownloadBtn } from './wennen.style'
import wennenPDF from '../../assets/Wennen.pdf'

const WennenContainer = () => {
  return (
    <Container>
      <Header>
        Waarom wennen bij de onthaalouder?
      </Header>
      <p>Bekijk hieronder onze folder in verband met wennen.</p>
      <DownloadBtn href={wennenPDF} className='btn btn-info' download>Folder wennen</DownloadBtn>
    </Container>
  )
}

export default WennenContainer