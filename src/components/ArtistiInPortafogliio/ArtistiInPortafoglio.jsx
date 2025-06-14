import { Container, Row, Col, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import styles from './ArtistiInPortafoglio.module.css'

const ArtistiInPortafolgio = () => {
  const artisti = [
    {
      img: '/AlessandraGiambona.jpg',
      date: '04-08-2024',
    },
    {
      img: '/AlessiaDonadoni.jpg',
      date: '06-02-2024',
    },
    {
      img: '/AngelaMartorana.jpg',
      date: '29-04-2021',
    },
    {
      img: '/AuroraD1Artisti.jpg',
      date: '06-02-2025',
    },
    {
      img: '/CatiaSalaArtisti.jpg',
      date: '14-04-2023',
    },
    {
      img: '/CiccioCarta.jpg',
      date: '14-05-2020',
    },
    {
      img: '/CinziaFanara.jpg',
      date: '13-10-2021',
    },
    {
      img: '/DalilaZito.jpg',
      date: '15-08-2020',
    },
    {
      img: '/DanieleParrinelloArtisti.jpg',
      date: '14-04-2023',
    },
    {
      img: '/DeliaPollara.jpg',
      date: '01-07-2020',
    },
    {
      img: '/ElenaLena.jpg',
      date: '13-07-2020',
    },
    {
      img: '/FlaviaBargione.jpg',
      date: '15-08-2020',
    },
    {
      img: '/FrancescoCapizziArtisti.jpg',
      date: '16-11-2022',
    },
    {
      img: '/GiorgiaAcquaviva.jpg',
      date: '02-11-2020',
    },
    {
      img: '/GiovanniMontoro.jpg',
      date: '30-04-2022',
    },
    {
      img: '/GloriaLevantino.jpg',
      date: '10-10-2022',
    },
    {
      img: '/IleniaImbergamoArtisti.jpg',
      date: '05-02-2023',
    },
    {
      img: '/LukeGennaro.jpg',
      date: '18-10-2021',
    },
    {
      img: '/RiccardoPrecaniaArtisti.jpg',
      date: '06-02-2025',
    },
    {
      img: '/SoniaMineo.jpg',
      date: '28-04-2021',
    },
    {
      img: '/Veronicadisalvo.jpg',
      date: '16-06-2020',
    },
  ]
  const artistiOrdinati = artisti.sort((a, b) => {
    const parseDate = (str) => {
      const [day, month, year] = str.split('-')
      return new Date(`${year}-${month}-${day}`)
    }

    return parseDate(b.date) - parseDate(a.date)
  })

  return (
    <div className="p-4">
      <Helmet>
        <title>
          Artisti in Portafoglio | Accademia Con Noi è Tutta Un'Altra Musica
        </title>
        <meta
          name="description"
          content="scopri i nostri artisti che hanno partecipato alla nostra accademia con etichetta discografica"
        />
        <meta
          name="keywords"
          content="Accademia di canto moderno a Palermo, etichetta discogrsafica, studio discografico palermo, artisti accademia palermo, artisti palermo, cantanti palermitani"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Row className="gx-4 gy-4">
        {artistiOrdinati.map((card, idx) => (
          <Col xs={12} md={4} lg={4} key={idx}>
            <Card
              className="shadow h-100"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '1 / 1',
                width: '100%',
                borderRadius: '12px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'relative', height: '100%' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                  }}
                />
                {/* <Card.Text style={{ zIndex: 2, color: 'white' }}>
                  {card.date}
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ArtistiInPortafolgio
