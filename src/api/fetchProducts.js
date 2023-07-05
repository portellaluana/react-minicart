export const fetchProducts = async () => {
  const response = await fetch(
    `https://my-json-server.typicode.com/portellaluana/apiFake-teste/product`
  );
  const data = await response.json();

  return data;
};
