import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";

export const Card = ({ data }) => {
  const { id, title, thumbnail, price, description } = data.product;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    console.log("handleAddCart");

    const item = cartItems.find((product) => product.id === id);

    if (!item) {
      console.log("setCartItemsAntes");

      setCartItems([...cartItems, data.product]);
      console.log("setCartItemsDepois");
    }
    if (item) {
      item.quantity = item.quantity + 1;
    }
  };

  useEffect(() => {
    console.log("useEffect");

    localStorage.setItem("productsList", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={thumbnail} className="product-image" alt="imageProduct" />
        <h5>{title}</h5>
        <p>{description}</p>
        <strong>{formatCurrrency(price, "BRL")}</strong>

        <button className="button-primary" onClick={handleAddCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};
//https://www.flaticon.com/packs/sweets-and-candies-58?word=food
