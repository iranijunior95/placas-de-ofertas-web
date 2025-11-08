import { Navbar, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-auto">
            <h2>Placas De Ofertas</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col className="text-center">
            formulario aqui
          </Col>

          <Col className="text-center">
            preview aqui
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
