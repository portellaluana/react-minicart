import Button from "react-bootstrap/Button";
import closeIcon from "../../assets/images/closeIcon.png";

import { CartItem } from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Minicart = () => {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section
      className={`minicart-container ${
        cartVisible ? "minicart-container-active" : ""
      }`}
    >
      <div className="minicart-header">
        <h3>
          Meu carrinho
          {cartItems.length > 0 && (
            <span className="cart-quantity">({cartItems.length})</span>
          )}
        </h3>
        <button onClick={() => setCartVisible(!cartVisible)}>
      <img src={closeIcon} alt="icone-fechar" className="close-icon"/>
    </button>
      </div>
      
      
      {cartItems.length == 0 ? <h3 className="empty-cart-content">
           <span className="empty-cart">Seu carrinho está vazio.</span></h3> :
        <ul className="list-group"> {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={{ cartItem }} />
        ))}</ul>
      }
      

      <div className="minicart-footer">
        <div className="minicart-footer-div">
          <h6>Total</h6>
          <h6>R$ {totalPrice}</h6>
        </div>

        <Button className="button-secondary">Continuar comprando</Button>
        <Button className="button-primary">FINALIZAR COMPRAS</Button>
      </div>
    </section>
  );
};
