import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";

export const Card = ({ data }) => {
  const { id, title, thumbnail, price, description } = data.product;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddToCart = () => {
    const item = cartItems.find((product) => product.id === id);

    (!item ? setCartItems([...cartItems, data.product]) : item.quantity = item.quantity + 1 )
     };

  useEffect(() => {
    localStorage.setItem("productsList", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <li className="card-container">
      <div className="card-content">
        <img src={thumbnail} className="product-image" alt="imageProduct" />
        <h5>{title}</h5>
        <p>{description}</p>
        <strong>{formatCurrrency(price, "BRL")}</strong>

        <button className="button-primary" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </li>
  );
};
//https://www.flaticon.com/packs/sweets-and-candies-58?word=food
