import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { MenuItems } from '../types/menutpes'

const Header = () => {
  const menuItems: MenuItems[] = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About us",
      url: "/about"
    },
    {
      title: "Services",
      url: "/services"
    },
    {
      title: "Contact us",
      url: "/contact-us"
    }
  ]
  return (
    <>
      <Navbar className="navbarContainer" expand="lg" sticky="top" bg="light">
        <Container fluid="xxl">
          <Navbar.Brand><h3 className='fst-italic'>Logo</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto"> {/* To center the menu items, use mx-auto */}
              {menuItems.map((menuItem, index) => (
                <Nav.Link key={index} href={menuItem.url}>
                  {menuItem.title}
                </Nav.Link>
              ))}
            </Nav>
            <a href="/login">
              <Button className='rounded-pill btn btn-dark px-4'>
                Login
              </Button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header