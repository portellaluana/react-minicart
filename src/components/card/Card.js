import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";

export const Card = ({ data }) => {
  const { title, thumbnail, price, description } = data.product;
  const { cartItems, setCartItems} = useContext(AppContext);
  const result = cartItems.filter(item => item.id === data.product.id);
  const [ quantity, setQuantity] = useState(result.length)
 

  const handleAddCart = () => {

  setCartItems([...cartItems, data.product])
  setQuantity(quantity +1)

  // if(result.length === 0){
//   setCartItems([...cartItems, data.product])
// } if(result.length >= 1){(setQuantity(quantity +1))}

    console.log("cartItems.length", cartItems.length)
    console.log("result.length", result.length)
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
