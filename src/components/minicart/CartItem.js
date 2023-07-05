import { useContext } from "react";
import iconeLixeira from "../../assets/images/icone-lixeira.png";
import { AppContext } from "../../context/AppContext";


export const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const { id, title, thumbnail, price, description } = data.cartItem;

   const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updateItems)
  }

  return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          <p className="product-description" >{description}</p>
          <p className="quantity-item">Quantidade: 1</p>
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
<p className="product-price">R$ {price}</p>
            
</div>
        <button type="button" className="remove-item">
          <img src={iconeLixeira} alt="icone-lixeira" onClick={handleRemoveItem}/>
        </button>
      </li>
    </>
  );
};
