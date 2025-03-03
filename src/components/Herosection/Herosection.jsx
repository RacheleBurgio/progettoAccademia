import { Container, Row, Col } from 'react-bootstrap'
import styles from './Herosection.module.css'

function HeroSection() {
  return (
    <Container fluid className={styles.contenitore}>
      <Row className="w-100">
        <Col
          md={5}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center text-white"
        >
          <h4>Accademia di Canto e Musica Moderna di Palermo:</h4>
          <h1 className={styles.title1}>Con Noi è Tutta Un'Altra Musica</h1>
          <h3 className={styles.title3}>Artisti In Vetrina</h3>
        </Col>
        <Col md={7} xs={12} className="text-center text-white">
          <h3>Novità Video su Youtube!</h3>
          <div className={styles.videoContainer}>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU_gqvjgs7PF7DGo7vNtPxvQ&index=0&autoplay=1"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection
