import { Container, Row, Col } from 'react-bootstrap'
import styles from './Herosection.module.css'
import Presentazione from '../Presentazione/Presentazione'
import FloatingWhatsAppButton from '../FloatingWhatsappButton/FloatingWhatsappButton'
import { Helmet } from 'react-helmet-async'

function HeroSection() {
  return (
    <>
      <Helmet>
        <title>Con Noi è Tutta Un'Altra Musica</title>
        <meta
          name="description"
          content="Scopri la nostra Accademia di Canto e Musica Moderna a Palermo! Offriamo lezioni di canto, strumento e composizioni professionali per tutte le età e livelli. La scuola si trova a Palermo"
        />
        <meta
          name="keywords"
          content="Scuola di canto Palermo, Lezioni di canto Palermo, Accademia di Musica Moderna, Corso di canto professionale, corso di strumento a Palermo, Label"
        />
        <meta property="og:title" content="Con noi è tutta un'altra musica" />
        <meta
          property="og:description"
          content="Eventi, corsi e passione musicale per tutti."
        />
        <meta
          property="og:image"
          content="https://connoietuttaunaltramusica.it/img/logo.png"
        />
        <meta
          property="og:url"
          content="https://connoietuttaunaltramusica.it"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Con noi è tutta un'altra musica",
            "url": "https://connoietuttaunaltramusica.it",
            "logo": "https://connoietuttaunaltramusica.it/img/logo.png"
          }
          `}
        </script>
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
              // src="/logo.png"
              alt="logo"
              className={`${styles.logo} img-fluid`}
            />
            <div className={`${styles.titles} social-icons`}>
              <h3 className={`${styles.title3} mt-3`}>
                Scuola di Canto Moderno <br /> Accademia di Musica <br />
                Label
              </h3>
              <h5 style={{ paddingTop: '15px' }}>Seguici e contattaci</h5>

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
              <a
                href="https://wa.me/393496064054"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-whatsapp"
                  style={{ paddingRight: '10px', fontSize: '30px' }}
                ></i>
              </a>
            </div>
          </Col>

          {/* Video */}
          <Col md={7} xs={12} className="text-center text-white p-3">
            <div className={`${styles.video} ratio ratio-16x9`}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU_gqvjgs7PF7DGo7vNtPxvQ&index=0"
                // src="https://www.youtube.com/embed/FmbOjjSaH3I?si=pEfingdUOC5VDiQw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className={styles.iframe}
              ></iframe>
            </div>
          </Col>
        </Row>
        <Presentazione />
        <FloatingWhatsAppButton />
      </Container>

      {/* Sezioni aggiuntive */}
    </>
  )
}

export default HeroSection
