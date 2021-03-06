import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 0;
  min-height: 60vh;
`

export const Header = styled.h1`
  font-weight: 700;
  color: #7cb342;
  margin-bottom: 20px;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
   @media (max-width : 992px) {
    flex-direction: column;
  }
`

export const ImgContainer = styled.div`
  width: 40%;
`

export const ContactsList = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  width: 35%;
  min-height: 360px;
  @media (max-width : 992px) {
    width: 85%;
    height: 100%;
    margin-bottom: 20px;
  }
`

export const ListTitle = styled.p`
  font-weight: 600;
`

export const List = styled.ul`
  list-style-type: none;
`
