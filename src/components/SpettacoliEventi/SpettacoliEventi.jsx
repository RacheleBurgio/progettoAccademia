import styles from './SpettacoliEventi.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const SpettacoliEventi = () => {
  return (
    <div className={styles.sfondo}>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/spettacolii.jpg)' }}
      >
        Spettacoli ed Eventi
      </h1>

      <Container>
        <Row>
          <Col>
            <div>
              <h2 className={styles.titoli}>Eventi</h2>
              <h3 className={styles.titoli}>Con noi è tutta un'altra musica</h3>
              <p className={styles.testi}>
                Scopri il mondo vibrante della musica e dell'arte con
                l'Accademia di Canto e Musica Moderna di Palermo Con noi è tutta
                un’altra musica.
              </p>
              <p p className={styles.testi}>
                La nostra accademia non è solo un luogo di apprendimento, ma un
                palcoscenico vivente dove talenti emergenti e artisti affermati
                si uniscono per celebrare la passione per la musica.
              </p>

              <h3 className={styles.titoli}>Un calendario ricco di emozioni</h3>
              <p p className={styles.testi}>
                Partecipa ai nostri eventi esclusivi, tra concerti, masterclass,
                showcase e festival, tutti pensati per ispirare e coinvolgere.
                Ogni appuntamento è un'opportunità unica per ascoltare
                performance straordinarie, scoprire nuovi artisti e immergersi
                in un'atmosfera creativa e stimolante.
              </p>
              <h3 className={styles.titoli}>
                Cultura, condivisione e crescita
              </h3>
              <p className={styles.testi}>
                Crediamo che la musica sia un linguaggio universale che unisce
                le persone. I nostri eventi sono aperti a tutti: studenti,
                appassionati e chiunque desideri vivere l'arte in modo
                autentico. Ogni evento è un'occasione per condividere
                esperienze, apprendere e crescere insieme.
              </p>
              <h3 className={styles.titoli}>Resta aggiornato</h3>
              <p className={styles.testi}>
                Non perdere l'occasione di partecipare ai nostri eventi! Segui
                la nostra sezione dedicata per rimanere aggiornato su tutte le
                novità, gli artisti ospiti e le date in programma. Con noi, ogni
                nota è un passo verso nuove emozioni e scoperte.
              </p>
              <h2 className={styles.titoli}>
                Unisciti a noi e fai parte della nostra storia musicale!
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpettacoliEventi
