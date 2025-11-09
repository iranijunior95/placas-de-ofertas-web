import { Navbar, Container, Row, Col } from "react-bootstrap";
import ScreenPreview from "./components/ScreenPreview";
import "./app.css";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-auto">
            <h2>Placas De Oferta</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col className="text-center">
            formulario aqui
          </Col>

          <Col className="text-center coluna-screen-preview">
            <ScreenPreview 
              descricao="coxinha dotrigo 300g (sabores)"
              preco="10,99"
              validade="oferta valída até o dia 09 de novembro"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
