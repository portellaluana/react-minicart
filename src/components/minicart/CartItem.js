import iconeLixeira from "../../assets/images/icone-lixeira.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const CartItem = ({ data }) => {
  const { title, thumbnail, price } = data;
  console.log("daaaaaata", data);
  return (
    <ListGroup className="list-group">
      <ListGroup.Item>
        <Container>
          <Row>
            <Col xs={3}>
              <img
                src={thumbnail}
                alt="imagem-produto"
                className="product-image"
              />
            </Col>
            <Col className="product-name">
              <h6>{title}</h6>
              <p>R$ {price}</p>
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
              <button type="button" className="remove-item">
                <img src={iconeLixeira} alt="icone-lixeira" />
              </button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </ListGroup>
  );
};
