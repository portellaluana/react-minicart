import { Card } from "../card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { Loading } from "../spinner/Loading";
import { AppContext } from "../../context/AppContext";

export const Products = () => {
  const { products, setProducts, loading, setLoading, productNotFound } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <div>
    {!productNotFound ? <div className="container-vitrine-produtos">
    <h4 className="mb-4 ">Vitrine de produtos</h4>
    {loading ? (
      <Loading />
    ) : (
      <div className="vitrine-produtos">
        {products.map((product) => (
          <Card key={product.id} data={{ product }} />
        ))}
      </div>
    )}
  </div> : ""
  }
    </div>
  );
};
