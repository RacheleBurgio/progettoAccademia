import styles from './Maestri.module.css'
import { Helmet } from 'react-helmet-async'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

const Maestri = () => {
  return (
    <div className={styles.sfondo}>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/prova1.jpg)' }}
      >
        Maestri
      </h1>

      <Container>
        <Row>
          <Col>
            <h1 className={`${styles.titoli} text-center`}>
              Partnership - Maestri{' '}
            </h1>
            <p className={styles.testi}>
              L’impronta didattica rivolta ai nostri allievi è arricchita da un
              percorso interdisciplinare, pensato per formare professionisti
              competenti e capaci di esprimere al meglio il proprio potenziale
              artistico. Per garantire l'acquisizione e l'aggiornamento continuo
              delle competenze, l'Accademia di Canto e Musica Moderna "Con Noi è
              Tutta Un’Altra Musica" si avvale di collaborazioni eccellenti e di
              partnership con icone di altissimo livello nel settore musicale.
              Queste sinergie contribuiscono a elevare il percorso formativo dei
              nostri studenti, offrendo loro opportunità di crescita e confronto
              con le migliori realtà del panorama musicale.
            </p>
            <h2>Maestro Peppe Vessicchio</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  src="/prova3.jpg"
                  alt="First slide"
                  className="d-block w-100"
                  style={{ height: '550px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/prova1.jpg"
                  alt="Second slide"
                  className="d-block w-100"
                  style={{ height: '550px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/prova2.jpg"
                  alt="Third slide"
                  className="d-block w-100"
                  style={{ height: '550px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Maestri
