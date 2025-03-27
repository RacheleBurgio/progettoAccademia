import { Container, Row, Col } from 'react-bootstrap'
import styles from './Herosection.module.css'
import Presentazione from '../Presentazione/Presentazione'
import News from '../News/News'
import { Helmet } from 'react-helmet-async'

function HeroSection() {
  return (
    <>
      <Helmet>
        <title>Con Noi è tutta un'altra Musica</title>
        <meta
          name="description"
          content="Scopri la nostra Accademia di Canto e Musica Moderna a Palermo! Offriamo lezioni di canto, strumento e composizioni professionali per tutte le età e livelli. La scuola si trova a Palermo"
        />
        <meta
          name="keywords"
          content="Scuola di canto Palermo, Lezioni di canto Palermo, Accademia di Musica Moderna, Corso di canto professionale, corso di strumento a Palermo, Label"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Container fluid className={styles.contenitore}>
        <Row className="w-100 align-items-center">
          {/* Logo e Titolo */}
          <Col
            md={5}
            xs={12}
            className="d-flex flex-column justify-content-center align-items-center text-white text-center p-3"
          >
            <img
              src="/logo.svg"
              alt="logo"
              className={`${styles.logo} img-fluid`}
            />
            <div className={styles.titles}>
              <h3 className={`${styles.title3} mt-3`}>
                Scuola di Canto Moderno <br /> Accademia di Musica <br />
                Label
              </h3>
              <h5 style={{ paddingTop: '15px' }}>Seguici</h5>
              <a
                href="https://www.facebook.com/connoietuttaunaltramusicaacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-facebook"
                  style={{ paddingRight: '10px', fontSize: '30px' }}
                ></i>
              </a>
              <a
                href="https://www.youtube.com/c/ConNoièTuttaunaltraMusica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-youtube"
                  style={{ paddingRight: '10px', fontSize: '30px' }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/connoietuttaunaltramusica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-instagram"
                  style={{ paddingRight: '10px', fontSize: '30px' }}
                ></i>
              </a>
            </div>
          </Col>

          {/* Video */}
          <Col md={7} xs={12} className="text-center text-white p-3">
            <div className={`${styles.videoContainer} ratio ratio-16x9`}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU_gqvjgs7PF7DGo7vNtPxvQ&index=0&autoplay=1"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
          </Col>
        </Row>
        <Presentazione />
      </Container>

      {/* Sezioni aggiuntive */}
    </>
  )
}

export default HeroSection
