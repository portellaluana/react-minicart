import iconeLixeira from "../../assets/images/icone-lixeira.png";

export const CartItem = ({ data }) => {
  const { title, thumbnail, price } = data.cartItem;
  return (
    <>
      <li className="list-item">
        <img src={thumbnail} alt="imagem-produto" className="product-image" />

        <div className="product-name">
          <h5>{title}</h5>
          <p>R$ {price}</p>
          <div className="quantity-container">
            <p className="minus">
              <strong>-</strong>
            </p>
            <p className="quantity-item">2</p>
            <p className="plus">
              <strong>+</strong>
            </p>
          </div>
        </div>

        <button type="button" className="remove-item">
          <img src={iconeLixeira} alt="icone-lixeira" />
        </button>
      </li>
    </>
  );
};
