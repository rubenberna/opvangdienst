import styled from 'styled-components'
import { Link } from "gatsby"
import { Nav } from 'react-bootstrap'

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 336px;
  @media (max-width : 992px) {
    width: 235px;
  }
`

export const LinksContainer = styled(Nav)`
  width: 100%;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #8bc34a !important;
  }
`

export const Title = styled.h4`
  /* color: #8bc34a;
  font-weight: 600; */
`
