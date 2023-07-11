import iconeCarrinho from "../../assets/images/icone-carrinho.png";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const CartButton = () => {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);
  
  const openCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <button onClick={openCart}>
      <img src={iconeCarrinho} alt="icone-carrinho" />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
};
