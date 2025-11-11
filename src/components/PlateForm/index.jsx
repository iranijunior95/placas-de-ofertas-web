import { Form, Row, Col, Button } from "react-bootstrap";
import "./style.css";

function PlateForm(props) {
    function mascaraValor(event) {
        let input = event.target.value;

        input = input.replace(/\D/g, "");

        if (input > 9999999) return;

        const valorNumerico = Number(input) / 100;
        const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        props.setValor(valorFormatado);
    }

    return (
        <div className="plate-form">
            <Form onSubmit={(e) => e.preventDefault()} className="p-5">
                <Form.Group>
                    <Form.Label>Descrição da Oferta:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Descrição da oferta..."
                        value={props.descricao}
                        onChange={(e) => props.setDescricao(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Valor da Oferta:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="R$ 0,00"
                        value={props.valor}
                        onChange={mascaraValor} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Período da Oferta:</Form.Label>

                    <div className="group-radios">
                        <Form.Check
                            type="radio"
                            label="Valída até"
                            name="grupo1"
                            value="valida ate"
                            checked={props.opcoes === "valida ate"}
                            onChange={(e) => props.setOpcoes(e.target.value)}
                        />
                        
                        |

                        <Form.Check
                            type="radio"
                            label="Valída de até"
                            name="grupo1"
                            value="valida de ate"
                            checked={props.opcoes === "valida de ate"}
                            onChange={(e) => props.setOpcoes(e.target.value)}
                        />

                        |

                        <Form.Check
                            type="radio"
                            label="Descrição"
                            name="grupo1"
                            value="outro"
                            checked={props.opcoes === "outro"}
                            onChange={(e) => props.setOpcoes(e.target.value)}
                        />
                    </div>
                    
                    {props.opcoes === "valida ate" ? (
                        <Form.Control 
                            type="date"
                            value={props.data1}
                            onChange={(e) => props.setData1(e.target.value)} 
                        />
                    ) : props.opcoes === "valida de ate" ? (
                        <div className="group-date">
                            <Form.Control 
                                type="date"
                                value={props.data1}
                                onChange={(e) => props.setData1(e.target.value)} 
                            />

                            <Form.Control 
                                type="date"
                                value={props.data2}
                                onChange={(e) => props.setData2(e.target.value)}  
                            />
                        </div>
                    ) : (
                        <Form.Control 
                            type="text"
                            placeholder="Descrição da valídade..."
                            value={props.dataDescricao}
                            onChange={(e) => props.setDataDescricao(e.target.value)} 
                        />
                    )}
                </Form.Group>

                <Row>
                    <Col className="group-btns">
                        <Button 
                            variant="primary"
                            size="sm"
                            onClick={() => props.gerarPDF("a4")}
                        >
                            IMPRIMIR GRANDE
                        </Button>

                        <Button 
                            variant="primary"
                            size="sm"
                            onClick={() => props.gerarPDF([130, 180])}
                        >
                            IMPRIMIR MÉDIA
                        </Button>

                        <Button 
                            variant="primary"
                            size="sm"
                            onClick={() => props.gerarPDF([90, 130])}
                        >
                            IMPRIMIR PEQUENA
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default PlateForm;