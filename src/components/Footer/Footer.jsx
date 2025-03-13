import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto generalFooter">
      <Container className="footer-container">
        <Row className="text-center text-md-start">
          {/* Informazioni Aziendali */}
          <Col md={3} className="mb-3">
            <h5>Con noi è tutta un'altra musica</h5>
            <p>Via Gianbattista Ughetti 17, PA</p>
          </Col>

          {/* Link Utili */}
          <Col md={3} className="mb-3">
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Production
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Sito Principale
                </a>
              </li>
            </ul>
          </Col>

          {/* Documentazione e Legale */}
          <Col md={3} className="mb-3">
            <h5>Supporto</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Termini e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Configurazione Cookies
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3">
            <h5>Seguici</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/connoietuttaunaltramusicaacademy"
                className="text-white"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/connoietuttaunaltramusica/"
                className="text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/c/ConNoièTuttaunaltraMusica"
                className="text-white"
              >
                YouTube
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 border-top pt-3 text-center">
          <Col>
            <p className="mb-0">Con noi è tutta un'altra musica 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
