import NavbarBS from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import iconeCarrinho from "../../assets/images/icone-carrinho.png";

export const Navbar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#">
          HOME<span>BAKERY</span>
        </NavbarBS.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Pesquise por ex: 'algodão'"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <button>
          <img src={iconeCarrinho} alt="icone-carrinho" />
        </button>
      </Container>
    </NavbarBS>
  );
};
