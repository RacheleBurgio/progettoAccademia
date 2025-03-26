import styles from './SpettacoliEventi.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const SpettacoliEventi = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const role = sessionStorage.getItem('role')
  console.log('ruolocorrente', role)
  useEffect(() => {
    const fetchLocandine = async () => {
      try {
        const token = sessionStorage.getItem('token')

        const headers = token ? { Authorization: `Bearer ${token}` } : {} // Solo se l'utente è loggato

        const response = await fetch('http://localhost:8080/locandine', {
          headers,
        })

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`)
        }

        const data = await response.json()
        console.log('Dati ricevuti:', data)

        if (!Array.isArray(data)) {
          throw new Error('Formato dati non valido: atteso un array')
        }

        // Ordinare per dataCreazione dalla più recente alla più vecchia
        const sortedImages = [...data]
          .sort((a, b) => {
            const dateA = new Date(
              a.dataCreazione || a.createdAt || a.date
            ).getTime()
            const dateB = new Date(
              b.dataCreazione || b.createdAt || b.date
            ).getTime()
            return dateB - dateA
          })
          .map((item) => item.immagineurl || item.url || item)
          .filter((url) => url)

        setImages(sortedImages)
      } catch (err) {
        setError(err.message)
        console.error('Errore nel fetch:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchLocandine()
  }, [])

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
                l'Accademia di Canto e Musica Moderna di Palermo. Con noi è
                tutta un'altra musica.
              </p>
              <p className={styles.testi}>
                La nostra accademia non è solo un luogo di apprendimento, ma un
                palcoscenico vivente dove talenti emergenti e artisti affermati
                si uniscono per celebrare la passione per la musica.
              </p>
              <h3 className={styles.titoli}>Un calendario ricco di emozioni</h3>
              <p className={styles.testi}>
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

            {!loading && !error && (
              <div className="mt-4">
                <h3 className={styles.titoli}>Gallery Eventi</h3>
                <Row>
                  {images.length > 0 ? (
                    images.map((imageUrl, index) => (
                      <Col key={index} xs={12} md={4} lg={3} className="mb-4">
                        <img
                          src={imageUrl}
                          alt={`Evento ${index}`}
                          className="img-fluid rounded shadow"
                          style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        {/* Bottone visibile solo agli admin */}
                        {role === 'ROLE_ADMIN' && <button>Admin Button</button>}
                      </Col>
                    ))
                  ) : (
                    <Col className="text-center">
                      <p>Nessuna immagine disponibile</p>
                    </Col>
                  )}
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpettacoliEventi
