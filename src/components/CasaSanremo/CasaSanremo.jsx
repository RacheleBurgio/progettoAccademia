import { Container, Row, Col, Carousel } from 'react-bootstrap'
import styles from './CasaSanremo.module.css'

const CasaSanremo = () => {
  return (
    <div className={styles.sfondo}>
      <h1
        className={`${styles.Titolo} text-center`}
        style={{ backgroundImage: 'url(/casasanremoo.jpg)' }}
      >
        Casa Sanremo Live Box
      </h1>

      <Container>
        <Row>
          {/* Colonna Carousel */}
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine2.JPEG"
                    alt="Casa Sanremo Live Box Studenti"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine3.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine4.JPEG"
                    alt="Fourth slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine5.jpg"
                    alt="Fifth slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine6.jpg"
                    alt="Sixth slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/immagine7.jpg"
                    alt="Seventh slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <p className={`${styles.testi} text-center`}>
              Casa Sanremo è il luogo d’incontro per eccellenza per il mondo
              dello spettacolo, della musica e del cinema, dove nascono e si
              sviluppano iniziative artistiche e musicali in un ambiente
              raffinato e culturale, arricchito da momenti di intrattenimento.
            </p>
            <p className={`${styles.testi} text-center`}>
              Io, Noemi Fiotti, in qualità di Direttore Artistico dell'Accademia
              "Con Noi è Tutta Un'Altra Musica" di Palermo, sono orgogliosa di
              rappresentare i nostri allievi, portando con noi le loro sfide e
              passioni musicali. Viviamo questa esperienza unica nel contesto
              ufficiale di Casa Sanremo Livebox, un luogo che incarna la
              crescita artistica e l’eccellenza musicale. Come Direttore
              Artistico dell'Accademia di Canto e Musica Moderna di Palermo,
              seguo con attenzione il percorso di crescita dei nostri allievi,
              fornendo loro una Didattica di Alta Formazione Canoro/Musicale e
              promuovendo le loro abilità sia a livello nazionale che
              internazionale, con l'obiettivo di far emergere nuovi talenti nel
              panorama musicale contemporaneo.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Catia Sala Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/CatiaSala.jpg"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/CatiaSala1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/CatiaSala2.JPG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/CatiaSala3.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Catia Sala è una promettente cantante italiana che si sta facendo
              strada nel panorama musicale.Originaria di Palermo, ha intrapreso
              il suo percorso artistico studiando presso l'Accademia "Con Noi è
              Tutta Un'altra Musica". La sua carriera ha preso il via nel 2019,
              quando è entrata a far parte del roster della "Con Noi è Tutta
              Un'altra Musica Productions" e ha debuttato in Italia con il suo
              primo singolo, "Stare Ferma", seguito dal secondo brano, "Mai
              Più", nel 2020. In entrambe le canzoni, Catia esplora
              un'interessante fusione tra il pop Italiano e quello Americano,
              mostrando una versatilità che ha catturato l'attenzione del
              pubblico. Nel gennaio 2020, ha avuto l'opportunità di esibirsi al
              Festival of Song di New York, segnando un'importante tappa
              internazionale nella sua carriera.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Il 14 aprile 2023, ha pubblicato il suo primo inedito come
              cantautrice, “Troppo Rumore”, una pietra miliare che ha
              rappresentato una nuova fase della sua carriera artistica, con il
              supporto della "Con Noi è Tutta Un'Altra Musica Productions".
              Oltre a essere una talentuosa cantante, Catia è anche una
              musicista appassionata, con una particolare predilezione per il
              pianoforte, attraverso il quale riesce a esprimere le sue emozioni
              e la sua creatività. Il suo obiettivo principale come artista è
              quello di comunicare e connettersi con il pubblico attraverso
              melodie semplici, senza l'uso delle parole, conferendo alla sua
              musica una dimensione intima e profonda.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/wLIc62VEMCQ?si=xrsBWq94-WAteo9Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded shadow"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Sery Ventura Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Sery Ventura, giovane artista palermitana classe 2009, è una
              cantante che aspira a farsi strada nel panorama Canoro Musicale
              contemporaneo. Con talento, entusiasmo e una forte dedizione, Sery
              si impegna costantemente in progetti a cui crede profondamente.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              La sua formazione presso l'Accademia "Con Noi è Tutta Un'altra
              Musica" le sta permettendo di affinare le sue doti canore,
              preparandola a conquistare un pubblico variegato, capace di
              riconoscere e premiare il suo impegno artistico. Nonostante la
              giovane età, Sery Ventura ha già dimostrato di possedere quelle
              qualità che potrebbero condurla a ottenere sempre maggiori
              soddisfazioni e successi nel mondo della musica.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aFvt0Kf9BAA?si=uxRw1uemWrHZutxy"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Aurora D1 Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/AuroraD1.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/Aurora1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/Aurora2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Aurora D’Agostino, conosciuta artisticamente come Aurora D1, è una
              giovane cantante originaria di Palermo e cresciuta a Monreale.
              Attualmente studia canto moderno e pianoforte presso l'Accademia
              "Con noi è tutta un'altra musica" di Palermo, un luogo che ha
              fortemente influenzato la sua crescita artistica e personale. Nel
              2024 ha raggiunto importanti traguardi nella sua carriera
              partecipando a Casa Sanremo, un evento di grande prestigio legato
              al Festival di Sanremo, e prendendo parte a una masterclass presso
              l'Art Village di Roma. Oltre a queste esperienze, ha frequentato
              numerosi workshop e masterclass di perfezionamento vocale con i
              migliori vocal coach italiani, documentando costantemente il suo
              percorso di crescita musicale.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Il suo debutto nel mondo discografico avviene con il suo primo
              inedito, "Un suo sguardo", un brano scritto da lei stessa e
              prodotto dall'etichetta "Con noi è tutta un'altra musica
              Productions". Questo brano rappresenta un punto di partenza
              importante nella sua carriera e un'opportunità per esprimere il
              suo stile e la sua visione musicale. Aurora ha sempre avuto una
              forte passione per il canto fin da bambina, ma lo studio
              approfondito della musica ha trasformato il suo modo di vedere la
              vita e se stessa. Il suo nome d'arte, Aurora D1, è ispirato ai
              suoi studi in Farmacia: il recettore D1 è il principale della
              dopamina, un neurotrasmettitore che contribuisce alla sensazione
              di benessere. Per Aurora, infatti, cantare è essenziale quanto la
              dopamina, rendendo la musica una parte imprescindibile della sua
              vita.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IPHsa4K4Cn8?si=oYmEQmk0ZgIs0oZw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Daniele Parrinello Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/DanieleParrinello.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/DanieleParrinello1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/DanieleParrinello2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Daniele Parrinello artista palermitano che ha firmato il suo
              esordio con il primo inedito "Dentro è buio" è un talento
              emergente della scena musicale moderna. Studente presso
              l'Accademia "Con noi è tutta un'altra musica" di Palermo, sta
              affinando la sua tecnica e accrescendo la sua formazione musicale
              in modo completo e multidisciplinare. Con un approccio artistico a
              360 gradi, l'artista si concentra sul trasmettere emozioni
              autentiche attraverso la sua musica. Il suo obiettivo è
              raggiungere il cuore degli ascoltatori, mettendo a nudo se stesso
              e creando un legame profondo con il pubblico, in modo che possano
              immedesimarsi nei suoi testi e nelle sue melodie.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Nel suo percorso artistico, ha accumulato diverse esperienze sia
              dal punto di vista performativo che formativo, salendo su vari
              palchi e partecipando a incontri promozionali e di perfezionamento
              musicale. Sotto la produzione dell'etichetta "Con noi è tutta
              un'altra musica Productions", il suo sogno è quello di accarezzare
              l'anima delle persone attraverso le note, facendo della musica il
              veicolo delle sue emozioni più profonde.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_Ufzd2hZIjE?si=8ifwji_h-ZQQ8STW"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Francesco Capizzi Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Francesco Capizzi, nato a Palermo nel 2009, è un giovane talento
              che ambisce a conquistare il cuore del pubblico attraverso la sua
              musica. Nonostante la giovane età, Francesco dimostra una grande
              passione e maturità artistica, che emergono chiaramente nel suo
              primo inedito, "Tu mia madre", in cui dà voce ai suoi sentimenti
              più profondi. Studente presso l'Accademia "Con noi è tutta
              un'altra musica" di Palermo, Francesco sta affinando le sue
              capacità tecniche e musicali, immergendosi completamente nel mondo
              della musica moderna. Sotto la produzione dell'etichetta "Con noi
              è tutta un'altra musica Productions", sta tracciando il suo
              percorso artistico con l'obiettivo di trasmettere emozioni
              autentiche e coinvolgenti.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Il suo debutto con "Tu mia madre" mette in luce la sua capacità di
              esplorare temi personali e profondi, rivelando un artisticità che
              va oltre la sua età, con il desiderio di comunicare e connettersi
              con il pubblico attraverso la musica.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dhKnYLE_bFM?si=nJ3eWyYSvoc97Zfl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Ilenia Imbergamo Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Ilenia Imbergamo ha debuttato come cantautrice italiana con il suo
              primo singolo "Angelo mio", un brano carico di emozione in cui
              esprime l'amore e, allo stesso tempo, il profondo valore
              dell'assenza di un padre. Il tema intimo e toccante del brano
              riflette la sensibilità artistica di Ilenia, che riesce a
              trasformare sentimenti personali in musica. Cantante e studentessa
              presso l'Accademia "Con noi è tutta un'altra musica" di Palermo,
              Ilenia si distingue per la sua incredibile vocalità e capacità di
              improvvisazione. Queste qualità, unite a un forte sentimento
              vissuto e provato, le permettono di trasmettere emozioni
              autentiche al suo pubblico, rendendo le sue esibizioni
              particolarmente intense e coinvolgenti.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Nonostante la giovane carriera, ha già partecipato a diversi
              spettacoli ed eventi artistici, consolidando la sua presenza nel
              panorama musicale. Sotto la produzione dell'etichetta "Con noi è
              tutta un'altra musica Productions", Ilenia sta continuando a
              sviluppare il suo percorso musicale, con l'obiettivo di toccare il
              cuore degli ascoltatori attraverso le sue canzoni.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EB6TiwsoJCY?si=MoDBg4XAKK4eCmeY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex align-items-center">
          <Col>
            <h2 className={styles.titoli} style={{ paddingTop: '20px' }}>
              Artista Riccardo Precania Casa Sanremo 2024
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Carousel
              style={{
                paddingTop: '20px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura.JPEG"
                    alt="First slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura1.JPEG"
                    alt="Second slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ position: 'relative', paddingTop: '100%' }}>
                  <img
                    src="/SeryVentura2.JPEG"
                    alt="Third slide"
                    className="d-block w-100"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <p className={styles.testi}>
              Riccardo Precania, cantautore italiano, studia presso l'Accademia
              di canto e musica moderna "Con Noi è Tutta Un'altra Musica" a
              Palermo. Ha fatto il suo debutto musicale nel 2020 con il brano
              "Il nostro braccialetto", a cui ha fatto seguito, nel 2023,
              l'inedito "Infinito silenzio", consolidando il suo stile personale
              e lasciando un'impronta unica nel panorama musicale. Nel corso
              della sua carriera, Riccardo ha partecipato a numerosi concorsi e
              eventi artistici, sempre con l'obiettivo di inseguire il suo più
              grande sogno: trasmettere la sua essenza e le sue emozioni
              attraverso la musica. Per lui, la musica è come un "piccolo ma
              resistente ponte" che collega cuore e anima, e attraverso questo
              ponte vuole comunicare ciò che non riesce a esprimere a parole.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }} className="align-items-center">
          <Col xl={6} lg={6} md={12}>
            <p className={styles.testi}>
              Nel 2024, Riccardo ha presentato il suo nuovo inedito "Darti un
              senso" a Casa Sanremo Live Box, durante la settimana del Festival
              della canzone italiana, un'importante vetrina che ha dato
              ulteriore visibilità al suo talento. Sotto la produzione
              dell'etichetta "Con noi è tutta un'altra musica Productions",
              Riccardo continua a crescere come artista, puntando a condividere
              con il pubblico le sue esperienze e la sua visione della vita
              attraverso la sua musica.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-vqaaN7-JBc?si=C3gCsiEvnPEc9wup"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CasaSanremo
