import styled from 'styled-components'
import { Link } from "gatsby"
import { Nav } from 'react-bootstrap'

export const LinksContainer = styled(Nav)`
  width: 100%;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: red !important;
  }
`