export const fetchProducts = async (query) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  const data = await response.json();

  return data.results;
};

//../components/products/ProductsList.json
//https://my-json-server.typicode.com/portellaluana/apiFake-teste/product
