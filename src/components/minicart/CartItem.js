import { useContext, useState } from "react";
import iconeLixeira from "../../assets/images/icone-lixeira.png";
import { AppContext } from "../../context/AppContext";


export const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const { id, title, thumbnail, price } = data.product;

  const result = cartItems.filter(item => item.id === data.product.id);
  
  const [ quantity, setQuantity] = useState(result.length)

  
const handleRemoveItem = () => {

  if(quantity === 1){
    const updateItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updateItems)
  } else (setQuantity(quantity -1))
   }

    return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          {/* <p className="product-description" >{description}</p> */}
          <p className="quantity-item">Quantidade: {quantity}</p>
          <p className="product-price">R$ {price}</p>
          {/* <div className="quantity-container">
            
            <button className="minus" >
              -
              </button>
           
            <p className="quantity-item">{quantityItems}</p>
            
              <button className="plus" onClick={plusItem}>
              +
              </button>
            
          </div> */}
        </div>
<div>

            
</div>
        <button type="button" className="remove-item">
          <img src={iconeLixeira} alt="icone-lixeira" onClick={handleRemoveItem}/>
        </button>
      </li>
    </>
  );
};
