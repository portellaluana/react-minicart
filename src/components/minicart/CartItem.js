import { useContext } from "react";
import iconeLixeira from "../../assets/images/icons/trash-icon.png";
import { AppContext } from "../../context/AppContext";

export const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, title, thumbnail, price, description, quantity } = data.product;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateItems);
  };

  // const updateItems = cartItems.filter((item) => item.id !== id);
  //     setCartItems(updateItems);

  const handleDecrement = () => {
    if (data.product.quantity === 1) {
      const updateItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updateItems);
    } else {
      const updateItems = cartItems.map((item) => { 
        if (item.id === id) {
          item.quantity = item.quantity  - 1; 
        }
        return item;
      });

      setCartItems(updateItems);
    }
  };

  const handleIncreament = () => {
    const updateItems = cartItems.map((item) => { 
      if (item.id === id) {
        item.quantity = item.quantity  + 1; 
      }
      return item;
    });

    setCartItems(updateItems);
  };

  return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          <p className="product-description">{description}</p>

          {/* <p className="quantity-item">Quantidade: {quantidade}</p> */}
          <p className="product-price">R$ {price}</p>
          <div className="quantity-container">
            <button
              className="minus"
              onClick={() => handleDecrement(data.product.id)}
            >
              -
            </button>

            <p className="quantity-item">{quantity}</p>

            <button
              className="plus"
              onClick={() => handleIncreament(data.product.id)}
            >
              +
            </button>
          </div>
        </div>
        <div></div>
        <button type="button" className="remove-item">
          <img
            src={iconeLixeira}
            alt="icone-lixeira"
            onClick={handleRemoveItem}
          />
        </button>
      </li>
    </>
  );
};
