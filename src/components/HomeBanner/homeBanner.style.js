import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  @media (max-width : 992px) {
    flex-direction: column;
  }
`

export const Text = styled.p`
  width: 70%;
`

export const StyledLink = styled(Link)`
  text-decoration: none !important;
`

export const Frame = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`

export const FrameImage = styled.img`
  width: 100px;
  height: 100px;
`
