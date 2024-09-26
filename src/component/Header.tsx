import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import LawLogo from "../assets/images/lawLogo.png";
import { Link } from 'react-router-dom';
import { AdminMenuItems, AUTH, menuItems } from '../config/Constant';

const Header = () => {

return (
    <>
      <Navbar className="navbarContainer" expand="lg" sticky="top" bg="light">
        <Container fluid="xxl">
          <Navbar.Brand><h3 className='fst-italic'>Joshi Law Office <img src={LawLogo} style={{width: 46}} alt="Law" /></h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* To center the menu items, use mx-auto */}
            {AUTH ?
              menuItems.map((menuItem, index) => (
                <Link key={index} to={menuItem.url} className='text-dark fs-5 mx-3 hide-underlined'>
                  {menuItem.title}
                </Link>
              )) :
              AdminMenuItems.map((menuItem, index) => (
                <Link key={index} to={menuItem.url} className='text-dark fs-5 mx-3 hide-underlined'>
                  {menuItem.title}
                </Link>
              ))}
          </Nav>
          <Link to="/login">
            <Button className='rounded-pill btn btn-dark px-4 shadow-lg'>
                Login
              </Button>
          </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header