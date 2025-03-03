import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from './Navbarcss.module.css'

function MyNav() {
  return (
    <Navbar className={styles.topNav} expand="lg">
      <Navbar.Brand as={Link} to="/Home" style={{ marginLeft: '15px' }}>
        <img className={styles.img} src="/ros-41.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={styles.link} href="#home">
            - Chi Siamo -
          </Nav.Link>
          <Nav.Link className={styles.link} href="#link">
            - I Nostri Studenti -
          </Nav.Link>
          <Nav.Link className={styles.link} href="#link">
            - Partnership -
          </Nav.Link>
          <Nav.Link className={styles.link} href="#link">
            - Contattaci -
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
