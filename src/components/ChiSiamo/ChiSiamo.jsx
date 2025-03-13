import { Container, Row, Col } from 'react-bootstrap'
import styles from './ChiSiamo.module.css'
import { BiFontSize } from 'react-icons/bi'
const ChiSiamo = () => {
  return (
    <div>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/SiamoBack.jpg)' }}
      >
        Chi Siamo
      </h1>

      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="text-center">
                Benvenuti all'Accademia di Canto e Musica Moderna di Palermo{' '}
                <br /> <h1> Con Noi è Tutta Un'Altra musica</h1>
              </h2>
            </div>
            <p className="text-center" style={{ fontSize: '20px' }}>
              il punto di riferimento per la formazione musicale di qualità
              nella capitale siciliana. Se desideri sviluppare le tue abilità
              canore o vuoi imparare a suonare uno strumento, sei nel posto
              giusto!
            </p>
            <h4 className="text-center">
              Corsi di Canto e Strumenti Musicali a Palermo
            </h4>
            <p className="text-center" style={{ fontSize: '18px' }}>
              Presso la nostra accademia, offriamo una vasta gamma di:
            </p>
            <ul>
              <li>Corsi di canto Moderno;</li>
              <li>Corsi di strumenti musicali;</li>
              <li>Corsi di composizione.</li>
            </ul>
            <p>
              I nostri programmi sono progettati per tutte le età e livelli di
              esperienza, garantendo un percorso formativo personalizzato. I
              nostri insegnanti, musicisti esperti e appassionati, sono qui per
              aiutarti a scoprire e perfezionare il tuo talento.
            </p>
            <h5>Perché Scegliere l'Accademia di Canto di Palermo?</h5>
            <ul>
              <li style={{ fontSize: '18px' }}>
                <b>Formazione Musicale di Alta Qualità</b>
              </li>
            </ul>
            <p>
              L'Accademia di Canto di Palermo offre un programma di formazione
              musicale completo, che integra teoria e pratica in un percorso
              didattico rigoroso. I nostri corsi sono progettati per fornire
              agli studenti le competenze necessarie per eccellere nel panorama
              musicale contemporaneo.
            </p>
            <ul>
              <li>Ambiente Creativo e Inclusivo </li>
            </ul>
            <p>
              La nostra accademia si distingue per un'atmosfera stimolante e
              accogliente, dove ogni studente può liberamente esprimere la
              propria creatività. Incoraggiamo lo sviluppo di uno stile unico,
              contribuendo a formare artisti originali e autentici.{' '}
            </p>
            <ul>
              <li>Eventi Musicali e Performance Live</li>
            </ul>

            <p>
              Organizziamo regolarmente concerti ed eventi dal vivo, offrendo
              agli studenti l'opportunità di esibirsi e mettere in pratica le
              competenze acquisite. Queste esperienze non solo rafforzano la
              loro formazione, ma aumentano anche la loro visibilità nel mondo
              della musica.{' '}
            </p>
            <ul>
              <li>Opportunità di Networking </li>
            </ul>

            <p>
              Essere parte della nostra accademia significa entrare in una
              comunità musicale vibrante e dinamica. Creiamo opportunità di
              collaborazione con artisti e musicisti locali, facilitando
              incontri che possono arricchire il percorso artistico di ciascun
              studente. Etichetta Discografica e Produzione Musicale La nostra
              accademia è anche il punto di riferimento per la produzione e la
              divulgazione della creatività artistica. Offriamo supporto a
              talenti emergenti, aiutandoli a realizzare, produrre e distribuire
              le loro opere musicali attraverso la nostra etichetta discografica
              Con Noi è Tutta Un'Altra Musica Productions. Servizi Creativi per
              Videoclip Musicali Siamo specializzati nella realizzazione di
              videoclip musicali, fornendo servizi creativi che trasformano idee
              in opere visive coinvolgenti. Il nostro obiettivo è raccontare
              storie attraverso immagini che catturano l'essenza della musica,
              creando un legame emotivo con il pubblico. Collaborazioni con
              Professionisti di Rango Collaboriamo con artisti di fama nazionale
              e internazionale, nonché con talenti emergenti e affermati. Queste
              sinergie ci permettono di creare e diffondere contenuti musicali
              di alta qualità che si distinguono nel panorama artistico.
              Contattaci per Iniziare! Se sei pronto a intraprendere un viaggio
              musicale e a scoprire il tuo potenziale, contatta l'Accademia di
              Canto e Musica Moderna di Palermo Con Noi è Tutta Un'Altra Musica
              oggi stesso! Per maggiori informazioni sui nostri corsi e per
              prenotare una lezione di prova, visita il nostro sito. Con noi, la
              tua avventura musicale ha inizio! Accademia di Canto e Musica
              Moderna di Palermo: La Musica è la Nostra Passione, Falla
              Diventare Anche la Tua ACCADEMIA IN VETRINA Collegare link Youtube
              della pagina dell’accademia Collegare link Instagram Collegare
              link Facebook Collegare link Tik Tok
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p className="text-center">qui ci va immagine di noemi fiotti</p>
          </Col>
          <Col>
            <p className="text-center">qui ci va presentaizone Noemi Fiotti</p>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <img
              src="/inostricorsi.jpg"
              alt="Formazione e Discografia all'Accademia"
              className={styles.immagini}
            />
            <h4 className={`${styles.titoli} text-center`}>
              Formazione e Discografia all'Accademia
            </h4>
            <p className={`${styles.testi} text-center`}>
              L'Accademia di Canto Moderno di Palermo offre un percorso
              artistico-musicale completo, integrando formazione e discografia.
              I nostri allievi vivono un'esperienza unica, perché "Con noi è
              tutta un'altra musica". Scopri come sviluppare le tue abilità e
              costruire la tua carriera musicale.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <img
              src="/Chisiamo2.jpeg"
              alt="Accademia"
              className={styles.immagini}
            />
            <h4 className={`${styles.titoli} text-center`}>
              Accademia "Con Noi è Tutta Un'Altra Musica"
            </h4>
            <p className={`${styles.testi} text-center`}>
              L'Accademia "Con Noi è Tutta Un'Altra Musica" si distingue per il
              suo impegno verso l'eccellenza nella formazione musicale. Offriamo
              corsi di canto moderno e lezioni di strumenti personalizzati,
              oltre a gestire un'etichetta discografica indipendente.
            </p>
          </Col>
          <Col xs={12} md={12} lg={4} className="mb-4">
            <img
              src="/ChisiamoEventi.jpg"
              alt="Eventi e Iniziative Culturali"
              className={styles.immagini}
            />
            <h4 className={`${styles.titoli} text-center`}>
              Eventi e Iniziative Culturali
            </h4>
            <p className={`${styles.testi} text-center`}>
              Organizziamo concerti, spettacoli, festival e incontri artistici
              per mettere in luce i talenti emergenti. La nostra missione si
              estende dalla città di Palermo fino a New York, creando un
              ambiente dinamico e inclusivo.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Secondo Container con 2 colonne, ora centrate */}
      <Container className="py-4 d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-4">
            <img
              src="/ChisiamoImpatto.jpeg"
              alt="Impatto Sociale della Musica"
              className={styles.immagini}
            />
            <h4 className={`${styles.titoli} text-center`}>
              Impatto Sociale della Musica
            </h4>
            <p className={`${styles.testi} text-center`}>
              Siamo fortemente impegnati a utilizzare il potere innovativo della
              musica per promuovere cambiamenti sociali e culturali
              significativi. Attraverso iniziative inclusive e campagne di
              sensibilizzazione, sosteniamo il diritto di ogni individuo ad
              esprimere se stesso.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <img
              src="/ChisiamoFuturo.jpg"
              alt="Futuro e Sviluppi nella Cultura Musicale"
              className={styles.immagini}
            />
            <h4 className={`${styles.titoli} text-center`}>
              Futuro e Sviluppi nella Cultura Musicale
            </h4>
            <p className={`${styles.testi} text-center`}>
              Nel nostro impegno verso il futuro della cultura musicale, ci
              dedichiamo a promuovere talenti emergenti e a sostenere progetti
              innovativi. Lavoriamo per creare opportunità aperte e inclusive.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ChiSiamo
