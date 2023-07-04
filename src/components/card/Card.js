import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";
// import cottonCandy from "../../assets/images/cotton-candy.png";
// import rosquinha from "../../assets/images/rosquinha.png";
// import picole from "../../assets/images/picole.png";

export const Card = ({ data }) => {
  const { title, thumbnail, price } = data.product;
console.log("price", price)
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data.product]);
  };
  return (
    <div className="card-container">
      <div className="card-content">
          
            <img
                  src={thumbnail}
                  className="product-image"
                  alt="imageProduct"
                />
                <h5>{title}</h5>
                  <strong>{formatCurrrency(price, "BRL")}</strong>
                  
                  <button className="button-primary" onClick={handleAddCart}>
                    Adicionar ao carrinho
                  </button>
                </div>
    </div>
  );
};
//https://www.flaticon.com/packs/sweets-and-candies-58?word=food
