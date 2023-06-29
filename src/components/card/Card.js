import CardBoot from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cottonCandy from "../../assets/images/cotton-candy.png";
import rosquinha from "../../assets/images/rosquinha.png";
import picole from "../../assets/images/picole.png";

export const Card = () => {
  return (
    <div>
      <Container>
        <Row className="text-center d-flex align-items-center vitrine">
          <div className="vitrine-row-div">
            <Col className="d-flex justify-content-center">
              <CardBoot className="vitrine-cardboot">
                <CardBoot.Img
                  variant="top"
                  src={cottonCandy}
                  className="product-image"
                />
                <CardBoot.Body className="text-center">
                  <CardBoot.Title className="vitrine-cardboot-title">
                    Algodão Doce
                  </CardBoot.Title>
                  <CardBoot.Text>
                    <strong>R$ 5.00</strong>
                  </CardBoot.Text>
                  <Button className="button-primary">
                    Adicionar ao carrinho
                  </Button>
                </CardBoot.Body>
              </CardBoot>
            </Col>
            <Col className="d-flex justify-content-center">
              <CardBoot className="vitrine-cardboot">
                <CardBoot.Img
                  variant="top"
                  src={picole}
                  className="product-image"
                />
                <CardBoot.Body className="text-center">
                  <CardBoot.Title className="vitrine-cardboot-title">
                    Picolé
                  </CardBoot.Title>
                  <CardBoot.Text>
                    <strong>R$ 8.00</strong>
                  </CardBoot.Text>
                  <Button className="button-primary">
                    Adicionar ao carrinho
                  </Button>
                </CardBoot.Body>
              </CardBoot>
            </Col>
            <Col className="d-flex justify-content-center">
              <CardBoot className="vitrine-cardboot">
                <CardBoot.Img
                  variant="top"
                  src={rosquinha}
                  className="product-image"
                />
                <CardBoot.Body className="text-center">
                  <CardBoot.Title className="vitrine-cardboot-title">
                    Rosquinha
                  </CardBoot.Title>
                  <CardBoot.Text>
                    <strong>R$ 10.00</strong>
                  </CardBoot.Text>
                  <Button className="button-primary">
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
