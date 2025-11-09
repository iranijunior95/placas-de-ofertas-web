import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ImgLogo from "../../assets/logomarca.png";
import "./style.css";

function ScreenPreview(props) {
    const [alturaDescricao, setAlturaDescricao] = useState(19);

    useEffect(() => {
        const $divDescricao = document.querySelector('.descricao');

        setAlturaDescricao($divDescricao.clientHeight);

        console.log($divDescricao.clientHeight)
    }, [props.descricao]);

    return (
        <Card className="card-screen-preview">
            <Card.Body>
                <div className="cabecalho-oferta">
                    <h1>oferta</h1>
                </div>

                <div className="conteudo-oferta">
                    <h2 
                        className="descricao"
                        style={{ fontSize: alturaDescricao === 58 ? "0.9rem" : "1rem" }}
                    >
                        {props.descricao}
                    </h2>

                    <h3 className="preco">{props.preco}</h3>

                    <div 
                        className="rodape"
                        style={{marginTop: (60 - alturaDescricao)+"px"}}
                    >
                        <img src={ImgLogo} alt="Logo atacadão" className="logo" draggable="false" />
                        
                        <p className="validade">{props.validade}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ScreenPreview;