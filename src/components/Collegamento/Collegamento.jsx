import { Container, Row, Col, Card } from 'react-bootstrap'

function Collegamento() {
  return (
    <>
      <Container
        fluid
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,18,255,1) 0%, rgba(0,140,231,1) 0%, rgba(48,52,255,1) 24%, rgba(0,25,115,1) 59%, rgba(4,13,110,1) 100%)',
          height: '100%',
          width: '100%',
          paddingTop: '2em',
        }}
      >
        <h3 className="text-white">
          Dai un occhiata ai nostri artisti qui in accademia
        </h3>
      </Container>
    </>
  )
}

export default Collegamento
