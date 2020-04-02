import styled from 'styled-components'


export const Wrapper = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #F8F9FA;
  height: 165px;
  @media (max-width : 992px) {
    height: 149px;
  }
`
export const Container = styled.div`
  margin: 0 120px;
  padding-top: 15px;
  @media (max-width : 992px) {
    margin: 0 20px;
  }
`

export const Brand = styled.p`
  font-weight: 600;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`
