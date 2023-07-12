import brokenLollipop from "../../assets/images/page-not-found/broken-lollipop.png";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const NotFound = () => {
  const { productNotFound } = useContext(AppContext);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      {productNotFound ? (
        <div className="not-found-image-container">
          <div >
            <h4 className="not-found-title">
              <span className="not-found-eita">eita!</span>
              <br />
              <span>esse produto</span>
              <br />
              não tem
            </h4>
            <button className="not-found-btn" onClick={refreshPage}>
              Voltar
            </button>
          </div>
          <div className="not-found-image-content">
            <img
              className="not-found-image"
              src={brokenLollipop}
              alt="product-not-found"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
