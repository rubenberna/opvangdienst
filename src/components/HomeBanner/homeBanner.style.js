import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ImgContainer = styled.div`
  width: 100%;
  filter: opacity(0.75);
  display: flex;
  justify-content: center;
`

export const ChildrenImage = styled.img`
  width: 72%;
  @media (max-width : 992px) {
    height:28%;
  }
`

export const Header = styled.h1`
  text-align: center;
  font-weight: 700;
  color: #7cb342;
  margin-top: 30px;
`

export const TextContainer = styled.div`
`

export const Text = styled.h5`

`
