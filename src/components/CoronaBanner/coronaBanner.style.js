import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 50px;
  margin-bottom: 40px;
  height: 100%;
  @media (max-width : 992px) {
    padding: 20px 50px;
  }
`

export const Header = styled.h3`
  font-weight: 600;
`

export const Banner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media (max-width : 992px) {
    width: 100%;
  }
`

export const ImgContainer = styled.div`

`

export const TextContainer = styled.div`
  width: 51%;
  @media (max-width : 992px) {
    width: 100%;
    margin: inherit;
  }
`