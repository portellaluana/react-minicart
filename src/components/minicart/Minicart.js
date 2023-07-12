import Button from "react-bootstrap/Button";
import closeIcon from "../../assets/images/icons/close-icon.png";

import { CartItem } from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";

export const Minicart = () => {
  const { cartItems, cartVisible, setCartVisible, setCartItems } =
    useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => (item.price * item.quantity) + acc, 0);

  useEffect(() => {
      setCartItems(JSON.parse(localStorage.getItem("productsList")) || []);
  }, []);

  return (
    <>
      <section
        className={`minicart-content ${
          cartVisible ? "minicart-content-active" : ""
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
            <img src={closeIcon} alt="icone-fechar" className="close-icon" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <h3 className="empty-cart-content">
            <span className="empty-cart">Seu carrinho está vazio.</span>
          </h3>
        ) : (
          <ul className="list-group">
            {" "}
            {cartItems.map((product, cartItemIndex) => (
              <CartItem key={cartItemIndex} data={{ product }} />
            ))}
          </ul>
        )}

        <div className="minicart-footer">
          <div className="minicart-footer-div">
            <h6>Total</h6>
            <h6>R$ {totalPrice.toFixed(2)}</h6>
          </div>

          <Button className="button-secondary" onClick={() => setCartVisible(!cartVisible)}>Continuar comprando</Button>
          <Button className="button-primary">FINALIZAR COMPRAS</Button>
        </div>
      </section>
      <div className={`${cartVisible ? "minicart-backdrop" : ""}`} 
      onClick={() => setCartVisible(!cartVisible)}/>
    </>
  );
};
