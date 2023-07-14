export const CartItemCheckout = ({ data }) => {
  const { title, thumbnail, price, description, quantity } = data.product;


  return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          <p className="product-description">{description}</p>
          <p className="quantity-item quantity-item-checkout">Quantidade: {quantity}</p>
        </div>
        <p className="product-price">R$ {price}</p>
      </li>
    </>
  );
};
