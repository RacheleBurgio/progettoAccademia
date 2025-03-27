import { Container, Row, Col } from 'react-bootstrap'
import styles from './StudioDiRegistrazione.module.css'

const Etichetta = () => {
  return (
    <div className={styles.sfondo}>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/MixDaSostutuire.JPEG)' }}
      >
        Studio di registrazione
      </h1>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.titoli}>
              Benvenuti in Con Noi È Tutta un'Altra Musica Productions
            </h2>
            <p className={styles.testi}>
              Dove la musica prende vita! Siamo un'etichetta discografica
              innovativa, dedicata a fornire un ambiente creativo e altamente
              professionale per artisti e musicisti di ogni genere. La nostra
              missione è trasformare le tue idee in realtà sonore, offrendo una
              gamma completa di servizi, tra cui registrazione, mixaggio,
              mastering e molto altro.
            </p>
            <h2 className={styles.titoli}>Perché Scegliere Noi?</h2>
            <p className={styles.testi}>
              Con un team di esperti del settore e attrezzature all'avanguardia,
              siamo pronti ad accompagnarti in ogni fase del tuo percorso
              musicale. Ogni artista merita di esprimere la propria
              individualità, e noi siamo qui per garantire che ogni brano
              rispecchi la tua visione unica. Siamo il tuo partner ideale per
              realizzare produzioni che catturano l'attenzione e lasciano il
              segno.
            </p>
            <h2 className={styles.titoli}>I Nostri Servizi</h2>
            <ul className={styles.testi} style={{ listStyleType: 'none' }}>
              <li style={{ marginBottom: '20px' }}>
                Produzione Musicale: Sviluppiamo il tuo progetto con attenzione
                ai dettagli e alla qualità.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Recording: Studio di registrazione professionali per catturare
                il tuo sound unico.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Mixing: Creiamo mix di alta qualità per garantire il miglior
                impatto sonoro.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Mastering: Affiniamo i tuoi brani per assicurarti che suonino al
                meglio su ogni piattaforma.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Digital Store: Distribuiamo la tua musica sulle principali
                piattaforme digitali, rendendola accessibile a un pubblico
                globale.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Photo Shooting: Sessioni fotografiche professionali per
                presentare al meglio la tua immagine artistica.
              </li>
              <li style={{ marginBottom: '20px' }}>
                Video Production: Produciamo video musicali creativi e
                coinvolgenti per promuovere il tuo lavoro.
              </li>
            </ul>

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
            <h2 className={styles.titoli}>Mix</h2>
            <p className={styles.testi}>
              Con Noi È Tutta Un'Altra Musica Productions è il punto di
              riferimento per centinaia di artisti a Palermo che desiderano
              emergere nel panorama del cantautorato. Il nostro team di
              produttori audio e video è specializzato nel supportare cantanti e
              musicisti che cercano di dare vita alla propria arte in modo
              autentico e originale.
            </p>
            <h2 className={styles.titoli}>Contattaci</h2>
            <p className={styles.testi}>
              Se sei pronto a portare la tua musica al livello successivo,
              contattaci oggi stesso! Con Noi È Tutta un'Altra Musica
              Productions, la tua visione musicale diventa realtà. Insieme,
              daremo vita a suoni indimenticabili e a esperienze musicali
              straordinarie.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Etichetta
