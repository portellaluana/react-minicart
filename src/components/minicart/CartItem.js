import { useContext } from "react";
import iconeLixeira from "../../assets/images/icone-lixeira.png";
import { AppContext } from "../../context/AppContext";

export const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const { id, title, thumbnail, price } = data.cartItem;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id != id)
    setCartItems(updateItems)
  }
  return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div >
          <p className="product-name">{title}</p>
          <p className="product-price">R$ {price}</p>
          {/* <div className="quantity-container">
            <p className="minus">
              <strong>-</strong>
            </p>
            <p className="quantity-item">1</p>
            <p className="plus">
              <strong>+</strong>
            </p>
          </div> */}
        </div>

        <button type="button" className="remove-item">
          <img src={iconeLixeira} alt="icone-lixeira" onClick={handleRemoveItem}/>
        </button>
      </li>
    </>
  );
};
