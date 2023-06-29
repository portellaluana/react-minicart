import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CartItem } from "./CartItem";

export const Minicart = ({ open }) => {
  return (
    <Modal show={true} onHide={() => {}} className="minicart-modal">
      <Modal.Header closeButton className="minicart-header">
        <Modal.Title>
          Meu carrinho <span>(1)</span>
        </Modal.Title>
      </Modal.Header>

      <CartItem />

      <Modal.Footer className="minicart-footer">
        <div className="minicart-footer-div">
          <h6>Subtotal</h6>
          <h6>R$ 00.00</h6>
        </div>

        <Button className="button-secondary">Continuar comprando</Button>
        <Button className="button-primary">FINALIZAR COMPRAS</Button>
      </Modal.Footer>
    </Modal>
  );
};
