import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";

export const Card = ({ data }) => {
  const { title, thumbnail, price, description } = data.product;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data.product])
  }

     useEffect(()=>{
     localStorage.setItem('productsList', JSON.stringify(cartItems))
   },[cartItems])


  return (
    <div className="card-container">
      <div className="card-content">
          
            <img
                  src={thumbnail}
                  className="product-image"
                  alt="imageProduct"
                />
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
