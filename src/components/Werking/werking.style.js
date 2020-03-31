import styled from 'styled-components'
import babyPlaying from '../../images/baby_playing.jpg'

export const Container = styled.div`
  margin: 40px 0;
  display: flex;
`

export const TextContainer = styled.div`

`

export const Header = styled.h1`
  font-weight: 700;
  color: #7cb342;

`

export const Text = styled.h5`
  margin: 13px 0;
`

export const BabyPlaying = styled.div`
  background-image: url(${babyPlaying});
  height 400px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0;
`
