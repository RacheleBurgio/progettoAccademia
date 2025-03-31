import React, { useState, useEffect } from 'react'
import styles from './SpettacoliEventi.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

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

        const headers = token ? { Authorization: `Bearer ${token}` } : {}

        const response = await fetch(
          'http://localhost:8080/api/locandine/all',
          {
            headers,
          }
        )

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`)
        }

        const data = await response.json()
        console.log('Dati ricevuti:', data)

        if (!Array.isArray(data)) {
          throw new Error('Formato dati non valido: atteso un array')
        }

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
          .map((item) => {
            console.log('Item:', item)
            return {
              id: item.id || null,
              immagineurl: item.immagineurl || item.url || null, // Usa null se manca
            }
          })
          .filter((image) => image.immagineurl)

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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token')
      console.log('token', token)
      const response = await fetch(
        `http://localhost:8080/api/locandine/delete/${id}`,
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      if (!response.ok) {
        throw new Error('Errore durante la cancellazione')
      }

      setImages(images.filter((image) => image.id !== id)) // Ora usiamo l'id per filtrare
    } catch (error) {
      console.error('Errore nella cancellazione:', error)
      alert('Errore nella cancellazione')
    }
  }

  const [imageData, setImageData] = useState({ id: null, immagineurl: '' })

  const handleUpload = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const fileInput = e.target.elements.file
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      setError('Seleziona un file prima di procedere')
      setLoading(false)
      return
    }

    const file = fileInput.files[0]
    console.log('[DEBUG] File selezionato:', {
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    })

    const formData = new FormData()
    formData.append('file', file)

    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Token JWT mancante. Effettua il login.')
      }

      console.log('[DEBUG] Token JWT:', token.slice(0, 10) + '...')

      const response = await fetch(
        'http://localhost:8080/api/images/uploadme',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error("Errore nell'upload dell'immagine.")
      }
      const body = JSON.stringify({
        immagineurl: response.imageUrl,
      })
      console.log(response)
      console.log(body)
      const responseLocandina = await fetch(
        'http://localhost:8080/api/locandine/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body,
        }
      )

      const { id, immagineurl } = await responseLocandina.json() // Assicurati di convertire la risposta in JSON

      // Imposta lo stato con l'ID e l'URL
      setImageData({ id, immagineurl })

      setLoading(false)
    } catch (error) {
      console.error("Errore durante l'upload:", error)
      setError("Errore nell'upload dell'immagine.")
      setLoading(false)
    }
  }

  return (
    <div className={styles.sfondo}>
      <Helmet>
        <title>
          Spettacoli ed Eventi | Accademia Con Noi è Tutta Un'Altra Musica
        </title>
        <meta
          name="description"
          content="Scopri i nostri eventi musicali, le nostre attività e le nostre attività musicali, e resta aggiornato il più possibile."
        />
        <meta
          name="keywords"
          content="Spettacoli a Palermo, Locandien spettacoli, il nostro palcoscenico, eventi musicali, cultura condivisione e crescita, accademia con etichetta discografica"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
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

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Caricamento...</span>
                </div>
              </div>
            ) : (
              <Row>
                {images.length > 0 ? (
                  images.map((image) => (
                    <Col
                      key={image.id || image.immagineurl}
                      xs={12}
                      md={4}
                      lg={3}
                      className="mb-4 d-flex flex-column"
                    >
                      <div className="h-100 d-flex flex-column">
                        <img
                          src={image.immagineurl}
                          alt={`Locandina ${image.titolo || 'evento'}`}
                          className="img-fluid rounded-top"
                          style={{
                            height: '400px', // Imposta un'altezza fissa per tutte le immagini
                            objectFit: 'cover', // Riempi l'area senza distorsioni
                            width: '100%',
                          }}
                        />
                        {role === 'ROLE_ADMIN' && (
                          <div className="d-flex justify-content-start mt-2">
                            <button
                              onClick={() => handleDelete(image.id)}
                              className="btn btn-danger"
                            >
                              <i className="bi bi-trash me-2"></i>
                              Cancella Locandina
                            </button>
                          </div>
                        )}
                      </div>
                    </Col>
                  ))
                ) : (
                  <Col xs={12} className="text-center py-5">
                    <div className="alert alert-info">
                      <i className="bi bi-image me-2"></i>
                      Nessuna immagine disponibile nella gallery
                    </div>
                  </Col>
                )}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpettacoliEventi
