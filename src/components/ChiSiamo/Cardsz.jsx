import { Row, Col, Card } from 'react-bootstrap'

const Cardz = () => {
  return (
    <Row className="text-center">
      <Col md={4}>
        <Card
          className="shadow h-100"
          style={{
            backgroundImage: 'url(/cantoModerno.jpg)',
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
              Corsi di canto Moderno
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card
          className="shadow h-100"
          style={{
            backgroundImage: 'url(/strumentimusicali.jpg)',
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
                background: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1,
              }}
            />
            <Card.Title
              className="shadow"
              style={{ zIndex: 2, color: 'white' }}
            >
              Corsi di strumenti musicali
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card
          className="shadow h-100"
          style={{
            backgroundImage: 'url(/composiziones.jpg)',
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
              Corsi di composizione
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default Cardz
