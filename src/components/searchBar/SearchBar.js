import Form from "react-bootstrap/Form";
import iconeSearch from "../../assets/images/icone-search.png";
import { useState, useContext } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";

export const SearchBar = () => {
  const { setProducts, setLoading, setProductNotFound } =
    useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");

    const searchValueLowerCase = searchValue.toLocaleLowerCase();

    const SearchResult = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchValueLowerCase)
    );

    if (SearchResult.length === 0) {
      setProductNotFound(true);
      setSearchValue("");
    }
    setProducts(SearchResult);

  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          value={searchValue}
          placeholder="Buscar produtos"
          className="me-2"
          aria-label="Search"
          onChange={({ target }) => setSearchValue(target.value)}
          required
        />
        <button>
          <img src={iconeSearch} alt="icone-search" />
        </button>
      </Form>
    </>
  );
};
