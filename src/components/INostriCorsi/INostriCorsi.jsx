import { Container, Row, Col } from 'react-bootstrap'
import styles from './INostriCorsi.module.css'

const INostriCorsi = () => {
  return (
    <div>
      <h1
        className={`${styles.titoloCorsi} text-center`}
        style={{ backgroundImage: 'url(/tastiera.jpg)' }}
      >
        I Nostri Corsi
      </h1>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/indirizzoVocalist.jpg"
                alt="indirizzo Vocalist"
                className={styles.immaginiCorsi}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Canto Indirizzo Vocalist: Diventa un Cantante
                Professionista
              </h2>
              <p>
                Il <b>corso di canto con indirizzo Vocalist</b> è progettato per
                aspiranti cantanti che desiderano intraprendere una carriera
                professionale nel mondo della musica. Questo programma offre
                un'opportunità unica per sviluppare una "voce versatile", capace
                di adattarsi a diversi generi musicali e stili interpretativi.
              </p>
              <p>
                Durante il percorso formativo, gli studenti approfondiranno:
              </p>
              <ul>
                <li>
                  tecniche vocali avanzate, imparando a gestire la
                  "respirazione";
                </li>
                <li>controllo del diaframma;</li>
                <li>interpretazione musicale.</li>
              </ul>
              <p>
                Inoltre, verranno forniti strumenti per migliorare la presenza
                scenica, fondamentale per chi si esibisce dal vivo.
              </p>
              <p>Il corso è ideale per chi aspira a diventare:</p>
              <ul>
                <li>cantante solista;</li>
                <li>corista;</li>
                <li>esecutore.</li>
              </ul>
              <p>Gli studenti avranno l'opportunità di esibirsi in:</p>
              <ul>
                <li>eventi artistici;</li>
                <li>concerti dal vivo;</li>
                <li>studio di registrazione;</li>
                <li>produzioni musicali.</li>
              </ul>
              <p>
                Con un focus sull'arte del canto e sulle performance dal vivo,
                questo corso rappresenta un passo fondamentale per chi desidera
                lasciare il proprio segno nell'industria musicale.
              </p>
              <p>
                Iscriviti ora e inizia il tuo viaggio verso il successo nel
                mondo della musica!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Canto Moderno e Formazione per Vocal Coach: Corso Avanzato di
                Insegnamento Vocale
              </h2>
              <p>
                Il <b>corso di canto moderno</b> presso la{' '}
                <b>
                  Scuola di Canto Moderno Palermo Con Noi è Tutta Un'Altra
                  Musica
                </b>
                con specializzazione in <b>Vocal Coach</b> è progettato per chi
                aspira a diventare un{' '}
                <b>insegnante di canto moderno professionista</b>e supportare
                altri cantanti nel loro <b>percorso di crescita vocale</b>.
                Durante il programma, gli studenti acquisiranno competenze in:
              </p>
              <ul>
                <li>
                  tecniche vocali avanzate con lo studio di come trasmettere
                  queste conoscenze in modo efficace agli allievi, con un forte
                  focus sulla didattica musicale e l'educazione vocale;
                </li>
                <li>
                  varietà di argomenti, come la respirazione corretta,
                  l'intonazione, la proiezione della voce e l'interpretazione
                  musicale.{' '}
                </li>
              </ul>
              <p>
                Gli studenti esploreranno anche i diversi stili musicali e le
                loro specificità tecniche, dal pop al rock, dal jazz al soul,
                permettendo loro di adattare le proprie metodologie
                d'insegnamento alle esigenze individuali di ciascun cantante. Un
                forte focus sulla didattica musicale e l'educazione vocale è
                centrale nel programma. Gli studenti apprenderanno strategie
                pedagogiche efficaci, tecniche di comunicazione e come creare un
                ambiente di apprendimento positivo e stimolante. Attraverso
                laboratori pratici e sessioni di feedback, gli aspiranti Vocal
                Coach svilupperanno abilità critiche nell'osservare e analizzare
                le performance vocali, fornendo suggerimenti costruttivi e
                motivazione ai loro allievi. Inoltre, il corso offre
                l'opportunità di partecipare a masterclass con artisti e
                insegnanti di fama nel settore, che condivideranno le loro
                esperienze e offriranno preziosi consigli pratici. Gli studenti
                avranno anche la possibilità di esibirsi in concerti e showcase,
                mettendo in pratica ciò che hanno appreso e costruendo la loro
                rete professionale. Alla fine del corso, i partecipanti avranno
                acquisito competenze necessarie per affrontare le sfide del
                mondo musicale contemporaneo e per ispirare e guidare altri nel
                loro viaggio artistico. Unisciti a noi per dare vita alla tua
                passione per il canto e trasformarla in un'opportunità
                professionale gratificante!
              </p>
            </Col>

            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/indirizzoVocalCoach.jpg"
                alt="Formazione per Vocal Coach: Corso Avanzato di Insegnamento Vocale"
                className={styles.immaginiCorsi}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/tastiera.jpg"
                alt="Corso di Pianoforte"
                className={styles.immaginiCorsi}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>Corso di Pianoforte</h2>
              <p>
                Il Corso di Pianoforte presso l’Accademia di Musica Moderna
                Palermo Con noi è Tutta Un’Altra Musica rappresenta
                un'opportunità unica per tutti coloro che desiderano
                approfondire le proprie competenze musicali e diventare pianisti
                esperti. Il nostro programma didattico comprende:
              </p>
              <ul>
                <li>
                  Tecnica Pianistica ovvero lo sviluppo delle abilità tecniche
                  fondamentali per suonare il pianoforte con maestria
                </li>
                <li>
                  Interpretazione Musicale ovvero lo studio approfondito di
                  repertori provenienti da diversi stili musicali, tra cui
                  classico, jazz, pop e contemporaneo
                </li>
                <li>
                  Sensibilità Artistica ovvero una formazione mirata per
                  affinare la propria espressione artistica, seguendo le linee
                  guida del programma ministeriale dei Conservatori Musicali
                </li>
              </ul>
              <p>
                Iscriviti al nostro corso per intraprendere un percorso
                formativo completo e stimolante, ideale per chiunque desideri
                eccellere nel mondo della musica. Con noi, potrai sviluppare la
                tua tecnica, esplorare nuove sonorità e liberare la tua
                creatività musicale!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Tastiera: Impara a Suonare in Stili Musicali Moderni
              </h2>
              <p>
                Il Corso di Tastiera è progettato per esplorare l'uso della
                tastiera in diversi contesti musicali contemporanei, come:
              </p>
              <ul>
                <li>musica pop; </li>
                <li>musica elettronica; </li>
                <li>rock;</li>
                <li>jazz.</li>
              </ul>
              <p>
                Durante il corso, gli studenti svilupperanno competenze pratiche
                e teoriche per suonare la tastiera in modo innovativo e
                creativo, sia come musicisti solisti che come parte integrante
                di una band. Questo programma formativo è adatto a musicisti di
                tutti i livelli, dai principianti agli avanzati, che desiderano
                approfondire la loro conoscenza della tastiera e applicarla a
                performance dal vivo o in studio di registrazione. Attraverso
                esercitazioni pratiche, tecniche di improvvisazione e analisi
                dei brani, gli studenti saranno in grado di esprimere la propria
                creatività e migliorare le proprie abilità musicali. Iscriviti
                presso l'Accademia di Musica Moderna Palermo Con Noi è Tutta
                Un'Altra Musica al nostro Corso di Tastiera per scoprire nuove
                sonorità e ampliare il tuo repertorio musicale!
              </p>
            </Col>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/Tastiera1.jpeg"
                alt="corso di tastiera"
                className={styles.immaginiCorsi}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/chitarra.jpg"
                alt="corso di chitarra"
                className={styles.immaginiCorsi}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Chitarra: Apprendimento Completo per Ogni Livello{' '}
              </h2>
              <p>
                Sei appassionato di musica e desideri imparare a suonare la
                chitarra? Il nostro Corso di Chitarra offre un programma
                formativo completo e strutturato, ideale per allievi di ogni età
                e livello, dai principianti agli avanzati. Con un approccio
                pratico e teorico, ti guideremo passo dopo passo nel fantastico
                mondo della chitarra. Perché Scegliere il Nostro Corso di
                Chitarra?
              </p>
              <ul>
                <li>
                  Programma Personalizzato: ogni studente ha esigenze diverse.
                  Il nostro corso è progettato per adattarsi alle tue
                  aspirazioni musicali, che tu voglia suonare canzoni famose,
                  comporre i tuoi brani originali o approfondire il repertorio
                  classico;
                </li>
                <li>
                  Ampia Gamma di Stili Musicali: scopri e sperimenta una varietà
                  di stili musicali, dal rock al jazz, dal blues al pop, fino
                  alla musica classica. Impara a suonare i tuoi generi preferiti
                  e a sviluppare uno stile personale unico;
                </li>
                <li>
                  Esercitazioni Pratiche: la pratica è fondamentale per
                  diventare un chitarrista esperto. Partecipando a sessioni di
                  esercitazione pratica, avrai l'opportunità di applicare le
                  tecniche apprese e migliorare costantemente le tue abilità;
                </li>
                <li>
                  Teoria Musicale: comprendere la teoria musicale è essenziale
                  per ogni musicista. Il nostro corso include lezioni di teoria
                  che ti aiuteranno a comprendere la struttura della musica e a
                  migliorare la tua capacità di improvvisazione e composizione;
                </li>
                <li>
                  Sviluppo delle Abilità Interpretative: impara non solo a
                  suonare le note, ma a esprimere emozioni attraverso la musica.
                  Ti guideremo nel miglioramento delle tue capacità
                  interpretative, affinché tu possa trasmettere il tuo messaggio
                  musicale al pubblico;
                </li>
                <li>
                  Insegnanti Qualificati: i nostri insegnanti sono musicisti
                  esperti e appassionati, pronti a condividere le loro
                  conoscenze e a supportarti nel tuo percorso musicale.
                </li>
              </ul>
              <p>
                Riceverai feedback costanti per progredire rapidamente.
                Iscriviti al nostro Corso di Chitarra presso la scuola di musica
                moderna Palermo Con noi è Tutta Un'Altra Musica e inizia a
                trasformare la tua passione in abilità concrete. Che tu sia un
                principiante che desidera imparare le basi o un musicista
                esperto in cerca di affinare le proprie tecniche, il nostro
                corso è la scelta perfetta per te. Non perdere l'occasione di
                esprimere la tua creatività e di far parte di una comunità
                musicale vibrante!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Solfeggio: Fondamenta per la Lettura Musicale e lo
                Studio Strumentale
              </h2>
              <p>
                Il Corso di Solfeggio rappresenta una pietra miliare per chi
                desidera approfondire la lettura musicale, essendo essenziale
                tanto per gli studenti di strumenti musicali quanto per i
                cantanti. Attraverso questo corso, gli allievi acquisiranno
                competenze fondamentali per leggere e interpretare le partiture
                musicali con maggiore precisione e consapevolezza. Gli obiettivi
                principali del corso includono:
              </p>
              <ul>
                <li>
                  Sviluppo delle abilità di lettura ritmica e melodica: gli
                  studenti impareranno a riconoscere e interpretare le diverse
                  figure ritmiche e melodiche, migliorando la loro performance
                  musicale;
                </li>
                <li>
                  Comprensione della struttura delle partiture e degli spartiti:
                  saranno forniti gli strumenti necessari per analizzare e
                  decifrare le partiture, facilitando così l'approccio a brani
                  complessi;
                </li>
                <li>
                  Miglioramento della capacità di ascolto e della precisione
                  ritmica: attraverso esercizi pratici, gli studenti affineranno
                  le loro abilità di ascolto critico, fondamentale per eseguire
                  musiche con accuratezza;
                </li>
                <li>
                  Preparazione per esami teorici e pratici: il corso offre un
                  solido supporto per affrontare con successo esami di teoria
                  musicale e performance, garantendo una preparazione completa.
                </li>
              </ul>
              <p>
                Iscriviti presso l'Accademia di Canto e Musica Moderna Palermo
                Con Noi è Tutta Un'Altra musica al nostro Corso di Solfeggio per
                costruire una solida base musicale e per elevare le tue
                competenze nel mondo della musica! Scopri di più e prenota il
                tuo posto oggi stesso.
              </p>
            </Col>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/solfeggio.jpg"
                alt="corso di solfeggio"
                className={styles.immaginiCorsi}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/stopriaDellaMusica.jpg"
                alt="corso di storia della musica"
                className={styles.immaginiCorsi}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Storia della Musica: Un Viaggio Affascinante nel Tempo
              </h2>
              <p>
                Il Corso di Storia della Musica offre agli studenti
                un'opportunità unica per intraprendere un approfondito viaggio
                storico attraverso i principali movimenti musicali, i
                compositori di spicco e le opere fondamentali che hanno plasmato
                la musica occidentale. Questo programma è perfetto per chi
                desidera non solo comprendere l'evoluzione della musica nel
                corso dei secoli, ma anche analizzare il suo impatto culturale e
                sociale. Grazie a un approccio interdisciplinare, il corso
                esplora le connessioni tra la musica e i contesti storici,
                politici e artistici in cui si è sviluppata. Gli studenti
                avranno l'opportunità di conoscere le diverse epoche musicali,
                dai classici ai moderni, e di scoprire come le innovazioni e le
                tendenze musicali abbiano influenzato la società. Iscriviti al
                nostro Corso di Storia della Musica per approfondire la tua
                conoscenza e apprezzamento della musica, un'arte che continua a
                essere una potente forma di espressione e comunicazione. Scopri
                con l' Accademia di Canto e Musica Moderna Palermo Con Noi è
                Tutta Un'Altra Musica come la musica ha evoluto il nostro mondo
                e come continua a farlo oggi.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corso di Lezioni d'Autore: Creazione di Brani Inediti per
                Cantautori e Compositori
              </h2>
              <p>
                Il Corso di Lezioni d'Autore è un'opportunità imperdibile per
                cantautori e compositori che aspirano a realizzare brani inediti
                e originali, pronti per il mercato discografico. Questo
                programma formativo si propone di guidare gli studenti nella
                scoperta e nello sviluppo della propria identità musicale,
                affinando al contempo le loro capacità compositive. Obiettivi
                del Corso:
              </p>
              <ul>
                <li>
                  Scrittura di Testi Originali: impara a creare liriche uniche
                  che raccontano storie ed emozioni, rendendo i tuoi brani
                  memorabili;
                </li>
                <li>
                  Sviluppo di Melodie Accattivanti: scopri tecniche per comporre
                  melodie coinvolgenti che catturano l'attenzione degli
                  ascoltatori;
                </li>
                <li>
                  Arrangiamenti e Strutture dei Brani: approfondisci le
                  competenze necessarie per strutturare i tuoi brani e creare
                  arrangiamenti che valorizzano la tua musica;
                </li>
                <li>
                  Produzione Musicale e Pubblicazione: Acquisisci conoscenze sul
                  processo di produzione musicale, dalla registrazione alla
                  distribuzione, per lanciare i tuoi brani sul mercato.
                </li>
              </ul>
              <p>
                Unisciti a Con Noi è Tutta Un'Altra Musica per dare vita alla
                tua musica e scoprire il potenziale dei tuoi inediti. Sviluppa
                le tue competenze artistiche e preparati a farti notare
                nell'industria musicale!
              </p>
            </Col>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/lezioniDautore.jpg"
                alt="lezioni d'autore"
                className={styles.immaginiCorsi}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={6} lg={6} className={styles.colonneimm}>
              <img
                src="/lezioniOnline.jpg"
                alt="lezioni online"
                className={styles.immaginiCorsi}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={6}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '2em',
              }}
            >
              <h2>
                Corsi di Musica Online: Formazione Professionale a Distanza
              </h2>
              <p>
                Grazie al nostro account istituzionale "Con noi è tutta un'altra
                musica Virtual", offriamo corsi di musica online per tutti
                coloro che non possono partecipare alle lezioni in presenza,
                progettati per chi desidera imparare o perfezionare le proprie
                abilità musicali comodamente da casa. I nostri insegnanti
                altamente qualificati sono pronti a supportarti in un percorso
                di apprendimento personalizzato, che si adatta a diversi livelli
                di esperienza, dai principianti agli avanzati. Apprendimento
                Personalizzato con Insegnanti Qualificati I nostri insegnanti di
                musica altamente qualificati sono pronti a guidarti in un
                percorso di apprendimento personalizzato. Che tu sia un
                principiante assoluto o un musicista esperto, i nostri corsi si
                adattano alle tue esigenze specifiche. Offriamo lezioni su vari
                strumenti, teoria musicale, composizione e molto altro,
                assicurandoci che ogni studente possa progredire al proprio
                ritmo. Un'Esperienza Interattiva e Coinvolgente La nostra
                piattaforma di apprendimento online offre un'esperienza
                interattiva e coinvolgente. Grazie a strumenti digitali e
                risorse multimediali, potrai partecipare attivamente alle
                lezioni, interagire con gli insegnanti e collaborare con altri
                studenti. Utilizziamo le più recenti tecnologie per garantire
                un'istruzione di alta qualità, rendendo l'apprendimento della
                musica non solo efficace, ma anche divertente. Vantaggi dei
                Corsi di Musica Online:
              </p>
              <ul>
                <li>
                  Flessibilità: impara quando e dove vuoi, senza la necessità di
                  spostamenti;
                </li>
                <li>
                  Accesso a Risorse Esclusive: I nostri studenti hanno accesso a
                  materiali didattici, video tutorial ed esercizi pratici;
                </li>
                <li>
                  Networking: unisciti a una comunità di appassionati di musica
                  e condividi le tue esperienze con altri studenti.
                </li>
              </ul>
              <p>
                Non Perdere l'Opportunità di Crescere Musicalmente Non perdere
                l'opportunità di esplorare il tuo potenziale musicale. Iscriviti
                ai nostri corsi di formazione musicale online e inizia a
                costruire le tue competenze oggi stesso. Che tu voglia suonare
                un nuovo strumento, migliorare la tua tecnica vocale o
                approfondire la teoria musicale, siamo qui per aiutarti a
                raggiungere i tuoi obiettivi. Unisciti a noi su "Con noi è tutta
                un'altra musica Virtual" e inizia il tuo viaggio musicale oggi!
                Con i nostri corsi di musica online, avrai la possibilità di
                imparare dai migliori e di migliorare le tue abilità in un
                ambiente stimolante e supportivo. Non aspettare oltre: la musica
                ti aspetta!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default INostriCorsi
