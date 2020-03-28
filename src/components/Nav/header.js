import PropTypes from "prop-types"
import React from "react"
import { Navbar } from 'react-bootstrap'

import { LinksContainer, NavLink, Title } from './header.style'

const linkStyle = {
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
          <Title>
            {siteTitle}
          </Title>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinksContainer className="mr-auto">
          {links.map(l =>
            <NavLink
              className='nav-link'
              key={l.key}
              style={linkStyle}
              activeStyle={{ color: '#8bc34a' }}
              to={l.path}>
              {l.title}
            </NavLink>
          )}
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
