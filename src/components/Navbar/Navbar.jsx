import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from './Navbarcss.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'

const MyNav = () => {
  return (
    <Navbar expand="lg" className={styles.topNav}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: '15px' }}>
          <img className={styles.logonav} src="/ros-41.png" alt="Logo" />
        </Navbar.Brand>

        {/* Toggle per mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 custom-toggler"
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        {/* Offcanvas che si apre da sinistra su mobile */}
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="start"
          className={`${styles.mobileMenu} text-white`}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="me-auto">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className=" fs-5">
                  ACADEMY
                </Dropdown.Toggle>
              </Dropdown>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className=" fs-5">
                  PRODUCTIONS
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${styles.dropdownMenuCenter}`}>
                  <Dropdown.Item
                    className="fs-5"
                    as={Link}
                    to="/ArtistiInPortafoglio"
                  >
                    Artisti in Portafoglio
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className=" fs-5">
                  PARTNERSHIPS
                </Dropdown.Toggle>
              </Dropdown>

              <Nav.Link href="#masterclass" className=" fs-5">
                MASTERCLASS
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default MyNav
