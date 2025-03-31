import { Container, Row, Col } from 'react-bootstrap'
import styles from './Etichetta.module.css'
import { Helmet } from 'react-helmet-async'

const Etichetta = () => {
  return (
    <div className={styles.sfondo}>
      <Helmet>
        <title>Etichetta | Accademia Con Noi è Tutta Un'Altra Musica</title>
        <meta
          name="description"
          content="Siamo una casa discografica Innovativa, realizziamo prodotti discografici di qualità, diamo servizi completi per artisti emergenti e tecnologia all'avanguardia e Supporto Professionale."
        />
        <meta
          name="keywords"
          content="Casa discografica a Palermo, Studio di registrazione, mixaggio a palermo, eventi musicali a palermo, servizi per casa discografica a Palermo, accademia con etichetta discografica"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/etichetta.jpg)' }}
      >
        Etichetta
      </h1>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.titoli}>
              Con Noi È Tutta un'Altra Musica Productions – La Vostra Etichetta
              Discografica Innovativa
            </h2>
            <p className={styles.testi}>
              Dal novembre 2019, "Con Noi è Tutta Un'Altra Musica Productions"
              offre un'opportunità unica agli allievi più talentuosi della
              nostra Academy: la possibilità di creare un prodotto discografico
              completo e all'avanguardia. Collaboriamo con musicisti e
              arrangiatori esperti, supportati da un team altamente qualificato,
              per trasformare le idee musicali dei nostri studenti in opere
              straordinarie.
            </p>
            <h2 className={styles.titoli}>
              Realizzazione di Prodotti Discografici di Qualità
            </h2>
            <p className={styles.testi}>
              Il nostro obiettivo è dare vita a nuove creazioni musicali,
              ottimizzando ogni fase del processo con passione, professionalità
              ed esperienza. Ogni progetto inizia con l'idea musicale dei nostri
              allievi, che mettono in gioco la loro passione e le loro emozioni
              per plasmare ogni dettaglio delle loro composizioni originali,
              dalla scrittura del testo all'ispirazione musicale.Una volta
              definita l'idea, la nostra produzione si occupa di ogni aspetto
              tecnico: arrangiamento, registrazione, editing, mixing e
              mastering. Garantiamo che ogni prodotto discografico rispetti i
              più alti standard del settore musicale.
            </p>
            <h2 className={styles.titoli}>
              Servizi Completi per Artisti Emergenti
            </h2>
            <p className={styles.testi}>
              Ma non ci fermiamo qui! Offriamo anche servizi di sviluppo
              grafico, produzione di backstage e videoclip, per poi procedere
              con la sponsorizzazione e la distribuzione su tutte le principali
              piattaforme digitali. Inoltre, organizziamo eventi artistici per
              promuovere i nostri talenti emergenti nel panorama musicale.
            </p>
            <h2 className={styles.titoli}>
              Tecnologia All'Avanguardia e Supporto Professionale
            </h2>
            <p className={styles.testi}>
              La nostra struttura è dotata di tecnologie moderne e
              professionisti altamente specializzati, pronti a realizzare
              prodotti discografici in linea con le ultime tendenze del settore.
              Grazie a una piattaforma online innovativa, siamo in grado di
              lanciare nuove promesse nel mondo della musica, credendo
              fermamente nel loro potenziale.
            </p>
            <h2 className={styles.titoli}>Unisciti a Noi</h2>
            <p className={styles.testi}>
              Se sei un artista emergente alla ricerca di un’etichetta
              discografica che creda in te e nella tua musica, contattaci oggi
              stesso, siamo qui per supportarti in ogni passo del tuo viaggio
              artistico, dall'ideazione del tuo sound unico alla promozione
              efficace della tua musica nel panorama attuale.
            </p>
            <h2 className={styles.titoli}>
              Servizi Strategici e Personalizzati
            </h2>
            <p className={styles.testi}>
              Offrendo servizi su misura come produzione musicale, marketing
              strategico, distribuzione digitale e supporto nella gestione
              artistica. La nostra esperienza e passione per la musica ci
              consentono di trasformare la tua visione in realtà, garantendo che
              il tuo talento venga ascoltato da un pubblico sempre più vasto.
            </p>
            <h2 className={styles.titoli}>
              “Con Noi è Tutta Un'Altra Musica Productions", il tuo sogno
              musicale diventa realtà.
            </h2>
            <p className={styles.testi}>
              Scopri come possiamo aiutarti a emergere nel competitivo mondo
              della musica Unisciti a noi e trasforma il tuo sogno musicale in
              un progetto concreto. Con "Con Noi è Tutta Un'Altra Musica
              Productions", ogni nota che crei avrà l'opportunità di raggiungere
              il cuore degli ascoltatori.
            </p>
            <p className={styles.testi}>
              Contattaci oggi stesso per scoprire come possiamo collaborare
              insieme e portare la tua musica a un livello superiore!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Etichetta
