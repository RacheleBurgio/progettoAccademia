import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './News.module.css'
function News() {
  return (
    <div className={styles.News}>
      <h3 className="text-white text-center">News in Accademia</h3>
      <Container className="text-center py-1 ">
        <Row className="g-4">
          <Col xs={12} sm={6} md={3}>
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>Colonna 1</Card.Title>
                <Card.Text>Testo descrittivo per la prima colonna.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>Colonna 2</Card.Title>
                <Card.Text>Testo descrittivo per la seconda colonna.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>Colonna 3</Card.Title>
                <Card.Text>Testo descrittivo per la terza colonna.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="shadow h-100">
              <Card.Body>
                <Card.Title>Colonna 4</Card.Title>
                <Card.Text>Testo descrittivo per la quarta colonna.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News
