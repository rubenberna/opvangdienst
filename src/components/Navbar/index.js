import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'
import { Navbar, NavDropdown } from 'react-bootstrap'

import { LinksContainer, NavLink, Title, Brand } from './header.style'
import Logo from '../logo'

const onzeDienstLinks = [
  { key: 0, title: 'Aanbod', path: '/onze-dienst/aanbod' },
  { key: 1, title: 'Werking', path: '/onze-dienst/werking' },
]

const oudersLinks = [
  { key: 0, title: 'Inschrijving', path: '/ouders/inschrijving' },
  { key: 1, title: 'Dossier', path: '/ouders/dossier' },
  { key: 2, title: 'Wennen', path: '/ouders/warom' },
  { key: 3, title: 'Wat te brengen?', path: '/ouders/wat' },
]

const linkStyle = {
  textDecoration: `none`
}

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" sticky='top'>
    <div className='container'>
      <Navbar.Brand>
        <Brand>
          <Link to='/'>
            <Logo />
          </Link>
          <NavLink
            style={linkStyle}
            to='/'>
            <Title id='head-brand'>
              {siteTitle}
            </Title>
          </NavLink>
        </Brand>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinksContainer className="mr-auto">
          <NavDropdown title="Onze Dienst" id="basic-nav-dropdown">
            {onzeDienstLinks.map(l =>
              <NavLink
                key={l.key}
                className='dropdown-item'
                to={l.path}
                activeStyle={{ color: "#7cb342" }}
              >
                {l.title}
              </NavLink>)}
          </NavDropdown>
          <NavDropdown title="Ouders" id="basic-nav-dropdown">
            {oudersLinks.map(l =>
              <NavLink
                key={l.key}
                className='dropdown-item'
                to={l.path}
                activeStyle={{ color: "#7cb342" }}
              >
                {l.title}
              </NavLink>)}
          </NavDropdown>
          <NavLink
            className='nav-link'
            style={linkStyle}
            to='/onthaalouder'
            activeStyle={{ color: "#7cb342" }}
          >
            Onthaalouder
          </NavLink>
          <NavLink
            className='nav-link'
            style={linkStyle}
            to='/contact'
            activeStyle={{ color: "#7cb342" }}
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
