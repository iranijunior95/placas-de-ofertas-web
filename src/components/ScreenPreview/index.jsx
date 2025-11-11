import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ImgLogo from "../../assets/logomarca.png";
import "./style.css";

function ScreenPreview(props) {
    const [alturaDescricao, setAlturaDescricao] = useState(19);

    useEffect(() => {
        const $divDescricao = document.querySelector('.descricao');
        const novaAltura = $divDescricao.clientHeight;

        if (novaAltura !== alturaDescricao) {
            setAlturaDescricao(novaAltura);
        }
        
    }, [props.descricao, alturaDescricao]);

    console.log(props.preco.replace(/R\$\s?/, "").length)
    
    return (
        <Card className="card-screen-preview">
            <Card.Body>
                <div className="cabecalho-oferta">
                    <h1>oferta</h1>
                </div>

                <div className="conteudo-oferta">
                    <h2 
                        className="descricao"
                        //style={{ fontSize: alturaDescricao === 58 ? "0.9rem" : "1rem" }}
                    >
                        {props.descricao === "" ? "descrição da oferta" : props.descricao}
                    </h2>

                    <h3 
                        className="preco"
                        style={{ 
                            fontSize: props.preco.replace(/R\$\s?/, "").length >= 7 ? "4.1rem" : "5rem" 
                        }}
                    >
                        {props.preco === "" ? "0,00" : props.preco.replace(/R\$\s?/, "")}
                    </h3>

                    <div 
                        className="rodape"
                        style={{marginTop: (60 - alturaDescricao)+"px"}}
                    >
                        <img src={ImgLogo} alt="Logo atacadão" className="logo" draggable="false" />
                        
                        <p className="validade">{props.validade === "" ? "valídade da oferta" : props.validade}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ScreenPreview;