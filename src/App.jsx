import { useEffect, useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import ScreenPreview from "./components/ScreenPreview";
import PlateForm from "./components/PlateForm";
import "./app.css";

function App() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [opcoes, setOpcoes] = useState("valida ate");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [dataDescricao, setDataDescricao] = useState("");
  const [descricaoValidade, setDescricaoValidade] = useState("");

  useEffect(() => {
    validaDescricaoValidade();
  }, [data1, data2, dataDescricao]);
  
  function validaDescricaoValidade() {
    const meses = {
      "01": "Janeiro",
      "02": "Fevereiro",
      "03": "Março",
      "04": "Abril",
      "05": "Maio",
      "06": "Junho",
      "07": "Julho",
      "08": "Agosto",
      "09": "Setembro",
      "10": "Outubro",
      "11": "Novembro",
      "12": "Dezembro"
    };

    if (opcoes === "valida ate") {
      if (data1 === "") {
        setDescricaoValidade("valídade da oferta");

        return;
      }

      const data1Array = data1.split('-');
      
      const data1Formatada = `oferta valída até o dia ${data1Array[2]} de ${meses[data1Array[1]]}`;

      setDescricaoValidade(data1Formatada);
    }else if (opcoes === "valida de ate") {
      if (data1 === "" || data2 === "") {
        setDescricaoValidade("valídade da oferta");

        return;
      }

      const data1Array = data1.split('-');
      const data2Array = data2.split('-');

      if (data1Array[1] === data2Array[1]) {
        const dataFormatada = `oferta valída a partir do dia ${data1Array[2]} até o dia ${data2Array[2]} de ${meses[data1Array[1]]}`;

        setDescricaoValidade(dataFormatada);
      }else {
        const dataFormatada = `oferta valída a partir do dia ${data1Array[2]} de ${meses[data1Array[1]]} até o dia ${data2Array[2]} de ${meses[data2Array[1]]}`;

        setDescricaoValidade(dataFormatada);
      }
    }else {
      if (dataDescricao === "") {
        setDescricaoValidade("valídade da oferta");

        return;
      }

      setDescricaoValidade(dataDescricao);
    }
  }

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
          <Col className="coluna-plate-form">
            <PlateForm 
              descricao={descricao}
              setDescricao={setDescricao}
              valor={valor}
              setValor={setValor}
              opcoes={opcoes}
              setOpcoes={setOpcoes}
              data1={data1}
              setData1={setData1}
              data2={data2}
              setData2={setData2}
              dataDescricao={dataDescricao}
              setDataDescricao={setDataDescricao}
            />
          </Col>

          <Col className="text-center coluna-screen-preview">
            <ScreenPreview 
              descricao={descricao}
              preco={valor}
              validade={descricaoValidade}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
