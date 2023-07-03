import CardBoot from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";
// import cottonCandy from "../../assets/images/cotton-candy.png";
// import rosquinha from "../../assets/images/rosquinha.png";
// import picole from "../../assets/images/picole.png";

export const Card = ({ data }) => {
  const { title, thumbnail, price } = data.product;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data.product]);
  };
  return (
    <div>
      <Container>
        <Row className="text-center d-flex align-items-center vitrine">
          <div className="vitrine-row-div">
            <Col className="d-flex justify-content-center">
              <CardBoot className="vitrine-cardboot">
                <img
                  src={thumbnail}
                  className="product-image"
                  alt="imageProduct"
                />
                <CardBoot.Body className="text-center">
                  <h5 className="vitrine-cardboot-title">{title}</h5>
                  <CardBoot.Text>
                    <strong>{formatCurrrency(price, "BRL")}</strong>
                  </CardBoot.Text>
                  <Button className="button-primary" onClick={handleAddCart}>
                    Adicionar ao carrinho
                  </Button>
                </CardBoot.Body>
              </CardBoot>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
//https://www.flaticon.com/packs/sweets-and-candies-58?word=food
