import pageNotFound1 from "../../assets/images/page-not-found/pageNotFound1.png";
// import pageNotFound2 from "../../assets/images/page-not-found/pageNotFound2.png";
// import pageNotFound3 from "../../assets/images/page-not-found/pageNotFound3.png";
// import pageNotFound4 from "../../assets/images/page-not-found/pageNotFound4.png";
// import pageNotFound5 from "../../assets/images/page-not-found/pageNotFound5.png";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const NotFound = () => {
    const { productNotFound } = useContext(AppContext);

  return (
    <div>
        {productNotFound ? 
        <div className="not-found-image-container">
        <h4 className="not-found-title">produto não encontrado</h4>
        <div className="not-found-image-content">
          <img className="not-found-image" src={pageNotFound1} alt="product-not-found" />
          {/* <img className="not-found-image" src={pageNotFound2} alt="product-not-found" />
          <img className="not-found-image" src={pageNotFound3} alt="product-not-found" />
          <img className="not-found-image" src={pageNotFound4} alt="product-not-found" />
          <img className="not-found-image" src={pageNotFound5} alt="product-not-found" /> */}

        </div>
      </div> : ""}
      
    </div>
  );
};
