import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 0;
  position: relative;
`

export const Header = styled.h1`
  font-weight: 700;
  color: #7cb342;
  margin-bottom: 20px;
`

export const TextBlock = styled.div`
  width: ${({width}) => width};
`

export const ImageFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const StyledImage = styled.img`
  width: 50%;
  filter: opacity(0.8);
  object-fit: contain;
  border-radius: 5px;
`