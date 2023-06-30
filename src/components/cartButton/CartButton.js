import iconeCarrinho from "../../assets/images/icone-carrinho.png";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const CartButton = () => {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);

  return (
    <button onClick={() => setCartVisible(!cartVisible)}>
      <img src={iconeCarrinho} alt="icone-carrinho" />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
};
