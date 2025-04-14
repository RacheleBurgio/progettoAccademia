import { Container, Row, Col } from 'react-bootstrap'
import React, { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    // Carica lo script iubenda.js solo se non è già presente
    if (
      !document.querySelector(
        'script[src="https://cdn.iubenda.com/iubenda.js"]'
      )
    ) {
      const loadIubendaScript = () => {
        const script = document.createElement('script')
        script.src = 'https://cdn.iubenda.com/iubenda.js'
        script.async = true
        document.body.appendChild(script)
      }

      if (document.readyState === 'complete') {
        loadIubendaScript()
      } else {
        window.addEventListener('load', loadIubendaScript)
      }
    }

    return () => {
      // Pulizia durante l'unmount (opzionale)
      const iubendaScript = document.querySelector(
        'script[src="https://cdn.iubenda.com/iubenda.js"]'
      )
      if (iubendaScript) {
        document.body.removeChild(iubendaScript)
      }
    }
  }, [])

  return (
    <footer className="bg-dark text-white py-5 mt-auto generalFooter">
      <Container className="footer-container">
        <Row className="text-center text-md-start">
          {/* Informazioni Aziendali */}
          <Col md={3} className="mb-3">
            <h5>Con noi è tutta un'altra musica</h5>
            <p> Via Giovanbattista Ughetti, 17, 90127 Palermo PA</p>
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
            <a
              href="https://www.iubenda.com/privacy-policy/72056256"
              className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
              title="Privacy Policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3">
            <h5>Seguici</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/connoietuttaunaltramusicaacademy"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/connoietuttaunaltramusica/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/c/ConNoièTuttaunaltraMusica"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 border-top pt-3 text-center">
          <Col>
            <p className="mb-0">
              Con noi è tutta un'altra musica © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
