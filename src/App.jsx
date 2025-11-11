import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import HeaderMenu from "./components/HeaderMenu";
import ScreenPreview from "./components/ScreenPreview";
import PlateForm from "./components/PlateForm";
import Load from "./components/Load";
import "./app.css";

function App() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [opcoes, setOpcoes] = useState("valida ate");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [dataDescricao, setDataDescricao] = useState("");
  const [descricaoValidade, setDescricaoValidade] = useState("");
  const [load, setLoad] = useState(false);
  
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

  useEffect(() => {
    validaDescricaoValidade();
  }, [data1, data2, dataDescricao]);

  function validaDescricaoValidade() {
    switch (opcoes) {
      case "valida ate":

        if (data1 === "") {
          setDescricaoValidade("valídade da oferta");
          return;
        }

        const dataArray = data1.split('-');
        const data1Formatada = `oferta valída até o dia ${dataArray[2]} de ${meses[dataArray[1]]}`;

        setDescricaoValidade(data1Formatada);
        break;

      case "valida de ate":

        if (data1 === "" || data2 === "") {
          setDescricaoValidade("valídade da oferta");
          return;
        }

        const data1Array = data1.split('-');
        const data2Array = data2.split('-');

        if (data1Array[1] === data2Array[1]) {
          const dataFormatada = `oferta valída a partir do dia ${data1Array[2]} até o dia ${data2Array[2]} de ${meses[data1Array[1]]}`;
          setDescricaoValidade(dataFormatada);
        } else {
          const dataFormatada = `oferta valída a partir do dia ${data1Array[2]} de ${meses[data1Array[1]]} até o dia ${data2Array[2]} de ${meses[data2Array[1]]}`;
          setDescricaoValidade(dataFormatada);
        }
        break;
    
      default:

        if (dataDescricao === "") {
          setDescricaoValidade("valídade da oferta");
          return;
        }

        setDescricaoValidade(dataDescricao);
        break;
    }
  }

  async function gerarPDF(tamanho = "A4") {
    setLoad(true);
    
    const element = document.querySelector(".card-screen-preview");

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: tamanho,
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const newWindow = window.open(pdfUrl);

    if (newWindow) {
      newWindow.onload = () => {
        newWindow.focus();
        newWindow.print();
      };
    }

    setLoad(false);
  }

  return (
    <>
      {load ? (<Load />) : ""}

      <HeaderMenu />

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
              gerarPDF={gerarPDF}
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
