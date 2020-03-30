import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavDropdown } from 'react-bootstrap'

import { LinksContainer, NavLink, Title } from './header.style'

const onzeDienstLinks = [
  { key: 0, title: 'Anbood', path: '/onze-dienst/anbood' },
  { key: 1, title: 'Werking', path: '/onze-dienst/werking' },
]

const oudersLinks = [
  { key: 0, title: 'Inschrijving', path: '/ouders/inschrijving' },
  { key: 1, title: 'Dossier', path: '/ouders/dossier' },
  { key: 2, title: 'Warom wennen?', path: '/ouders/warom' },
  { key: 3, title: 'Wat te brengen?', path: '/ouders/wat' },
]

const linkStyle = {
  textDecoration: `none`
}

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" sticky='top'>
    <div className='container'>
      <Navbar.Brand>
        <NavLink
          style={linkStyle}
          to='/'>
          <Title>
            {siteTitle}
          </Title>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinksContainer className="mr-auto">
          <NavDropdown title="Onze Dienst" id="basic-nav-dropdown">
            {onzeDienstLinks.map(l =>
              <NavLink
                className='dropdown-item'
                to={l.path}
              >
                {l.title}
              </NavLink>)}
          </NavDropdown>
          <NavDropdown title="Ouders" id="basic-nav-dropdown">
            {oudersLinks.map(l =>
              <NavLink
                className='dropdown-item'
                to={l.path}
              >
                {l.title}
              </NavLink>)}
          </NavDropdown>
          <NavLink
            className='nav-link'
            style={linkStyle}
            to='/onthaalouder'
            activeStyle={{ color: "red" }}
          >
            Onthaalouder
          </NavLink>
          <NavLink
            className='nav-link'
            style={linkStyle}
            to='/contact'
            activeStyle={{ color: "red" }}
          >
            Contact
          </NavLink>
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
