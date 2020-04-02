import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  font-weight: 700;
  color: #7cb342;
`

export const Text = styled.h5`
  margin: 13px 0;
`

export const Map = styled.iframe`
  width: 1000px;
  height: 480px;
  @media (max-width : 992px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
`