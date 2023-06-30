import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CartItem } from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Minicart = () => {
  const { cartItems, cartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section
      className={`minicart-modal ${cartVisible ? "minicart-modal-active" : ""}`}
    >
      <Modal.Header closeButton className="minicart-header">
        <Modal.Title>
          Meu carrinho <span>(1)</span>
        </Modal.Title>
      </Modal.Header>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} data={{ cartItem }} />
      ))}

      <Modal.Footer className="minicart-footer">
        <div className="minicart-footer-div">
          <h6>Total</h6>
          <h6>R$ {totalPrice}</h6>
        </div>

        <Button className="button-secondary">Continuar comprando</Button>
        <Button className="button-primary">FINALIZAR COMPRAS</Button>
      </Modal.Footer>
    </section>
  );
};
