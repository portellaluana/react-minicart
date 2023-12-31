import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";

export const Card = ({ data }) => {
  const { id, title, thumbnail, price, description } = data.product;

  const { cartItems, setCartItems } = useContext(AppContext);

     const handleAddToCart = () => {
      const item = cartItems.find((product) => product.id === id);
  
      if(item) {
        const updateItems = cartItems.map((product) => {
          if (product.id === id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        });
        setCartItems(updateItems); 
      } else {
        setCartItems([...cartItems, data.product])
      }
    }
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
