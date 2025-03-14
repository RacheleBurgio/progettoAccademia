import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from './Navbarcss.module.css'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

function MyNav() {
  return (
    <Navbar className={styles.topNav} expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: '15px' }}>
        <img className={styles.logonav} src="/ros-41.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-white">
              Accademia
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/chisiamo">
                Chi siamo
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/nostricorsi">
                I nostri corsi
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/accademiainvetrina">
                Accademia in vetrina
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/spettacoli-ed-eventi">
                Spettacoli ed eventi
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-white">
              Production
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#studenti">Etichetta</Dropdown.Item>
              <Dropdown.Item href="#testimonianze">
                Artisti in Portafoglio
              </Dropdown.Item>
              <Dropdown.Item href="#testimonianze">
                Studio di registrazione
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-white">
              Partnership
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#partner">
                Casa Sanremo live box
              </Dropdown.Item>
              <Dropdown.Item href="#collaborazioni">Maestri</Dropdown.Item>
              <Dropdown.Item href="#collaborazioni">Artisti</Dropdown.Item>
              <Dropdown.Item href="#collaborazioni">Giornalisti</Dropdown.Item>
              <Dropdown.Item href="#collaborazioni">
                Giornalisti Festival od Song USA
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#masterclass" className="text-white">
            Masterclass
          </Nav.Link>

          <Button className={styles.bottone} variant="outline-info">
            Area Riservata
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
