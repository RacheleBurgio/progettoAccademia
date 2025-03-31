import { Container, Row, Col, Carousel, Card } from 'react-bootstrap'
import Cardz from './Cardsz'
import styles from './ChiSiamo.module.css'
import { Helmet } from 'react-helmet-async'

const ChiSiamo = () => {
  return (
    <div className={styles.sfondo}>
      <Helmet>
        <title>Chi Siamo | Accademia Con Noi è Tutta Un'Altra Musica</title>
        <meta
          name="description"
          content="Scopri la nostra storia, i nostri corsi di canto e musica moderna a Palermo, e perché sceglierci come accademia di formazione musicale."
        />
        <meta
          name="keywords"
          content="Accademia di canto moderno a Palermo, corsi di canto e strumenti musicali, formazione musicale, eventi musicali, corsi di composizione a Palermo, accademia con etichetta discografica"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
              <h2
                className={`${styles.titoli} text-center`}
                style={{
                  paddingTop: '20px',
                }}
              >
                Benvenuti all'Accademia di Canto e Musica Moderna di Palermo
              </h2>
              <h1
                className={`${styles.titoli} text-center`}
                style={{
                  paddingTop: '20px',
                }}
              >
                Con Noi è Tutta Un'Altra Musica
              </h1>
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
            </div>
            <p className={`${styles.testi} text-center`}>
              il punto di riferimento per la formazione musicale di qualità
              nella capitale siciliana. Se desideri sviluppare le tue abilità
              canore o vuoi imparare a suonare uno strumento, sei nel posto
              giusto!
            </p>
            <Container>
              <Row>
                <Col md={6}>
                  <img
                    src="noemi.jpg"
                    alt="Noemi Fiotti"
                    className="img-fluid"
                  />
                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-center flex-column"
                >
                  <h2 className={`${styles.titoli} text-center`}>
                    <strong>Noemi Fiotti – Direttore Artistico</strong>
                  </h2>
                  <p className={`${styles.testi} text-center`}>
                    <br />
                    Laureata in Scienze dell'Educazione e della Formazione,
                    Noemi Fiotti è il Direttore Artistico dell'Accademia di
                    Canto e Musica Moderna "Con noi è tutta un'altra musica" di
                    Palermo. Con dedizione e visione artistica, guida gli
                    allievi non solo nel percorso formativo interno, ma anche
                    nelle esperienze esterne fondamentali per la loro crescita
                    professionale. Dalla partecipazione a eventi e spettacoli
                    organizzati dall’Accademia fino a concorsi, audizioni e
                    programmi televisivi, Noemi accompagna ogni talento in un
                    percorso che va oltre la didattica, offrendo supporto e
                    orientamento per affrontare con sicurezza il mondo della
                    musica e dello spettacolo. Il suo impegno costante è volto a
                    valorizzare il talento di ciascun studente, offrendo
                    opportunità di sviluppo a livello nazionale e
                    internazionale.
                  </p>
                </Col>
              </Row>
            </Container>

            <h4
              className={`${styles.titoli} text-center`}
              style={{
                paddingTop: '20px',
                fontSize: '35px',
              }}
            >
              Corsi di Canto e Strumenti Musicali a Palermo
            </h4>
            <p className={`${styles.testi} text-center`}>
              Presso la nostra accademia, offriamo una vasta gamma di:
            </p>
            <Cardz />
            <p className={`${styles.testi} text-center`}>
              I nostri programmi sono progettati per tutte le età e livelli di
              esperienza, garantendo un percorso formativo personalizzato. I
              nostri insegnanti, musicisti esperti e appassionati, sono qui per
              aiutarti a scoprire e perfezionare il tuo talento.
            </p>
            <h5
              className={`${styles.titoli} text-center`}
              style={{
                paddingTop: '20px',
                fontSize: '35px',
              }}
            >
              Perché Scegliere l'Accademia di Canto di Palermo?
            </h5>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b>Formazione Musicale di Alta Qualità</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              L'Accademia di Canto di Palermo offre un programma di formazione
              musicale completo, che integra teoria e pratica in un percorso
              didattico rigoroso. I nostri corsi sono progettati per fornire
              agli studenti le competenze necessarie per eccellere nel panorama
              musicale contemporaneo.
            </p>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b>Ambiente Creativo e Inclusivo</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              La nostra accademia si distingue per un'atmosfera stimolante e
              accogliente, dove ogni studente può liberamente esprimere la
              propria creatività. Incoraggiamo lo sviluppo di uno stile unico,
              contribuendo a formare artisti originali e autentici.
            </p>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b>Eventi Musicali e Performance Live</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              Organizziamo regolarmente concerti ed eventi dal vivo, offrendo
              agli studenti l'opportunità di esibirsi e mettere in pratica le
              competenze acquisite. Queste esperienze non solo rafforzano la
              loro formazione, ma aumentano anche la loro visibilità nel mondo
              della musica.
            </p>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b>Opportunità di Networking</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              Essere parte della nostra accademia significa entrare in una
              comunità musicale vibrante e dinamica. Creiamo opportunità di
              collaborazione con artisti e musicisti locali, facilitando
              incontri che possono arricchire il percorso artistico di ciascun
              studente
            </p>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b>Etichetta Discografica e Produzione Musicale</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              La nostra accademia è anche il punto di riferimento per la
              produzione e la divulgazione della creatività artistica. Offriamo
              supporto a talenti emergenti, aiutandoli a realizzare, produrre e
              distribuire le loro opere musicali attraverso la nostra etichetta
              discografica Con Noi è Tutta Un'Altra Musica Productions.
            </p>
            <ul
              className={`${styles.titoli} text-center`}
              style={{ listStyle: 'none' }}
            >
              <li style={{ fontSize: '23px', paddingTop: '20px' }}>
                <b> Servizi Creativi per Videoclip Musicali</b>
              </li>
            </ul>
            <p className={`${styles.testi} text-center`}>
              Siamo specializzati nella realizzazione di videoclip musicali,
              fornendo servizi creativi che trasformano idee in opere visive
              coinvolgenti. Il nostro obiettivo è raccontare storie attraverso
              immagini che catturano l'essenza della musica, creando un legame
              emotivo con il pubblico. Collaborazioni con Professionisti di
              Rango Collaboriamo con artisti di fama nazionale e internazionale,
              nonché con talenti emergenti e affermati. Queste sinergie ci
              permettono di creare e diffondere contenuti musicali di alta
              qualità che si distinguono nel panorama artistico.
            </p>
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
