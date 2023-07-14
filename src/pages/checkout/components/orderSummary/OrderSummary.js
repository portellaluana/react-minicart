import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/AppContext";
import { CartItemCheckout } from "../orderSummary/CartItemCheckout";

export const OrderSummary = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("productsList")) || []);
  }, []);

  return (
    <div className="order-summary-container">
      <h5>Resumo do pedido</h5>
      <div className="order-summary-content">
        <div className="order-summary-info">
          <ul className="list-group">
            {cartItems.map((product, cartCheckoutIndex) => (
              <CartItemCheckout key={cartCheckoutIndex} data={{ product }} />
            ))}
          </ul>
          <div className="order-summary-info-price">
            <h6>Total</h6>
            <h6>R$ {totalPrice.toFixed(2)}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
