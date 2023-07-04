export const fetchProducts = async () => {
  const response = await fetch(
    `https://my-json-server.typicode.com/portellaluana/apiFake-teste/product`
  );
  console.log("response", response)
  const data = await response.json();

  return data;
};

//../components/products/ProductsList.json
//https://my-json-server.typicode.com/portellaluana/apiFake-teste/product
