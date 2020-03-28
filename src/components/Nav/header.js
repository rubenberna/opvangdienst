import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

import { LinksContainer, NavLink } from './header.style'

const linkStyle = {
  color: `#333`,
  textDecoration: `none`
}

const links = [
  { key: 1, title: 'Onze Dienst', path: '/onze-dienst' },
  { key: 2, title: 'Ouders', path: '/ouders' },
  { key: 3, title: 'Onthaalouder', path: '/onthaalouder' },
  { key: 4, title: 'Contact', path: '/contact' }
]

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" sticky='top'>
    <div className='container'>
      <Navbar.Brand>
        <NavLink
          style={linkStyle}
          to='/'>
          {siteTitle}
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinksContainer className="mr-auto">
          {links.map(l =>
            <Nav.Link key={l.key}>
              <NavLink
                style={linkStyle}
                to={l.path}>
                {l.title}
              </NavLink>
            </Nav.Link>)}
        </LinksContainer>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
