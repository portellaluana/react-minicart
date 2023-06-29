import cottonCandy from "../../assets/images/cotton-candy.png";
import iconeLixeira from "../../assets/images/icone-lixeira.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const CartItem = () => {
  return (
    <ListGroup className="list-group">
      <ListGroup.Item>
        <Container>
          <Row>
            <Col xs={3}>
              <img
                src={cottonCandy}
                alt="imagem-produto"
                className="product-image"
              />
            </Col>
            <Col className="product-name">
              <h6>Algodão Doce</h6>
              <p>Açucar Colorido</p>
              <Row className="quantity-container">
                <p className="minus">
                  <strong>-</strong>
                </p>
                <p className="quantity-item">2</p>
                <p className="plus">
                  <strong>+</strong>
                </p>
              </Row>
            </Col>
            <Col xs={1} className="lixeira">
              <button>
                <img src={iconeLixeira} alt="icone-lixeira" />
              </button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </ListGroup>
  );
};
