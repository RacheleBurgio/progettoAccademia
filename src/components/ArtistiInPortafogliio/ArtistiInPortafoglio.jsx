// import { Container, Row, Col, Card } from 'react-bootstrap'
// import styles from './ArtistiInPortafoglio.module.css'

// const ArtistiInPortafolgio = () => {
//   return (
//     <div className="p-4">
//       <Row className="gx-4 gy-4">
//         {[
//           // Array di dati per evitare ripetizione se vuoi, o copia 4 volte il blocco sotto
//           {
//             img: '/AlessandraGiambona.jpg',
//             title: 'Alessandra Giambona',
//             date: '09-09-2024',
//           },
//           {
//             img: '/AlessiaDonadoni.jpeg',
//             title: 'Alessia Donadoni',
//             date: '27-06-2024',
//           },
//           {
//             img: '/AngelaMartorana.png',
//             title: 'Angela Martorana',
//             date: '29-04-2021',
//           },
//           {
//             img: '/AuroraArtisti.jpg',
//             title: 'Aurora D1',
//             date: '12-02-2025',
//           },
//           {
//             img: '/CatiaSalaArtisti.png',
//             title: 'Catia Sala',
//             date: '22-06-2020',
//           },
//           {
//             img: '/CiccioCarta.png',
//             title: 'Ciccio Carta',
//             date: '14-05-2020',
//           },
//           {
//             img: '/CinziaFanara.jpeg',
//             title: 'Cinzia Fanara',
//             date: '30-01-2022',
//           },
//           {
//             img: '/DalilaZito.png',
//             title: 'Dalila Zito',
//             date: '19-04-2020',
//           },
//           {
//             img: '/DanieleParrinelloArtisti.jpeg',
//             title: 'Daniele Panariello',
//             date: '29-04-2023',
//           },
//           {
//             img: '/DeliaPollara.png',
//             title: 'Delia Pollara',
//             date: '01-07-2020',
//           },
//           {
//             img: '/ElenaLena.jpg',
//             title: 'Elena Lena',
//             date: '10-08-2020',
//           },
//           {
//             img: '/FlaviaBargione.png',
//             title: 'Flavia Bargione',
//             date: '29-04-2021',
//           },
//           {
//             img: '/FrancescoCapizziArtisti.png',
//             title: 'Francesco Capizzi',
//             date: '29-04-2021',
//           },
//           {
//             img: '/GiorgiaAcquaviva.jpeg',
//             title: 'Giorgia Acquaviva',
//             date: '29-04-2021',
//           },
//           {
//             img: '/specialGuest.jpeg',
//             title: 'Giovanni Montoro',
//             date: '29-04-2021',
//           },
//           {
//             img: '/GloriaLevantino.jpg',
//             title: 'Gloria Levantino',
//             date: '29-04-2021',
//           },
//           {
//             img: '/IleniaImbergamoArtisti.jpg',
//             title: 'Ilenia Imbergamo',
//             date: '29-04-2021',
//           },
//           {
//             img: '/LukeGennaro.png',
//             title: 'Luke Gennaro',
//             date: '29-04-2021',
//           },
//           {
//             img: '/RiccardoPrecaniaArtisti.jpeg',
//             title: 'Riccardo Precania',
//             date: '29-04-2021',
//           },
//           {
//             img: '/SoniaMineo.jpg',
//             title: 'Sonia Mineo',
//             date: '29-04-2021',
//           },
//           {
//             img: '/Veronicadisalvo.png',
//             title: 'Veronica di Salvo',
//             date: '29-04-2021',
//           },
//         ].map((card, idx) => (
//           <Col xs={12} md={4} lg={4} key={idx}>
//             <Card
//               className="shadow h-100"
//               style={{
//                 backgroundImage: `url(${card.img})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '350px',
//                 width: '100%',
//                 borderRadius: '12px',
//               }}
//             >
//               <Card.Body
//                 className="d-flex flex-column justify-content-center align-items-center"
//                 style={{ position: 'relative', height: '100%' }}
//               >
//                 <div
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background: 'rgba(0, 0, 0, 0.4)',
//                     zIndex: 1,
//                   }}
//                 />
//                 <Card.Title
//                   className="shadow"
//                   style={{ zIndex: 2, color: 'white', fontSize: '2.5rem' }}
//                 >
//                   {card.title}
//                 </Card.Title>
//                 <Card.Text style={{ zIndex: 2, color: 'white' }}>
//                   {card.text}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   )
// }
// export default ArtistiInPortafolgio
