import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from './Navbarcss.module.css'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const MyNav = () => {
  return (
    <Navbar className={styles.topNav} expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: '15px' }}>
        <img className={styles.logonav} src="/ros-41.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Dropdown as={Nav.Item}>
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
              <Dropdown.Item as={Link} to="/spettacolieventi">
                Spettacoli ed eventi
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-white">
              Production
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* <Dropdown.Item as={Link} to="/etichetta">
                Etichetta
              </Dropdown.Item> */}
              <Dropdown.Item as={Link} to="/ArtistiInPortafoglio">
                Artisti in Portafoglio
              </Dropdown.Item>
              {/* <Dropdown.Item as={Link} to="/studiodiregistrazione">
                Studio di registrazione
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          {/*
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="text-white">
              Partnership
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/casasanremolivebox">
                Casa Sanremo live box
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/maestri">
                Maestri
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/artisti">
                Artisti
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/giornalisti">
                Giornalisti
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/festivalofsong">
                Giornalisti Festival od Song USA
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#masterclass" className="text-white">
            Masterclass
          </Nav.Link> */}

          {/* <Button
            as={Link}
            to="/login"
            className={styles.bottone}
            variant="outline-info"
          >
            Area Riservata
          </Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
