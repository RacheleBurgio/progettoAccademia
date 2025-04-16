import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './Presentazione.module.css'

function Presentazione() {
  return (
    <div className={styles.presentazione}>
      <Container className="text-center py-1">
        <Row className="gx-5 gy-4">
          <Col xs={12} sm={6} md={3} lg={3}>
            <Card
              className="shadow h-100"
              style={{
                backgroundImage: 'url(/accademia.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '350px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'relative' }}
              >
                {/* Overlay semi-trasparente */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.4)', // Overlay scuro semitrasparente
                    zIndex: 1,
                  }}
                />
                <Card.Title
                  className="shadow"
                  style={{ zIndex: 2, color: 'white' }}
                >
                  Chi Siamo
                </Card.Title>
                <Card.Text style={{ zIndex: 2, color: 'white' }}>
                  Scopri chi siamo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3}>
            <Card
              className="shadow h-100"
              style={{
                backgroundImage: 'url(/casaSanremo.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '350px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.4)', // Overlay scuro semitrasparente
                    zIndex: 1,
                  }}
                />
                <Card.Title
                  className="shadow"
                  style={{ zIndex: 2, color: 'white' }}
                >
                  Casa Sanremo Live Box
                </Card.Title>
                <Card.Text style={{ zIndex: 2, color: 'white' }}>
                  Scopri una delle nostre pià importanti Partnership.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3}>
            <Card
              className="shadow h-100"
              style={{
                backgroundImage: 'url(/artistiInPortafoglio.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '350px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.4)', // Overlay scuro semitrasparente
                    zIndex: 1,
                  }}
                />
                <Card.Title
                  className="shadow"
                  style={{ zIndex: 2, color: 'white' }}
                >
                  Artisti in Portafoglio
                </Card.Title>
                <Card.Text style={{ zIndex: 2, color: 'white' }}>
                  Scopri i nostri Artisti.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3} lg={3}>
            <Card
              className="shadow h-100"
              style={{
                backgroundImage: 'url(/specialGuest.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '350px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.4)', // Overlay scuro semitrasparente
                    zIndex: 1,
                  }}
                />
                <Card.Title
                  className="shadow"
                  style={{ zIndex: 2, color: 'white' }}
                >
                  Maestri
                </Card.Title>
                <Card.Text style={{ zIndex: 2, color: 'white' }}>
                  Scopri i Maestri che collaborano con noi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Presentazione
