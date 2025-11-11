import { Navbar, Container } from "react-bootstrap";

function HeaderMenu() {
    return (
        <Navbar 
            expand="lg" 
            bg="dark" 
            variant="dark"
        >
            <Container>
                <Navbar.Brand 
                    href="#"
                    style={{ fontWeight: "bold" }}
                >
                    PLACAS DE OFERTA
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HeaderMenu;