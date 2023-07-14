export const fetchProducts = async () => {
  const response = await fetch(
    `https://my-json-server.typicode.com/portellaluana/apiFake-teste/product`
  );
  const data = await response.json();

  return data;
};

export const fetchCep = async (cep) => {

  try {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);

  const CEP = await response.json();
  
  return CEP;

  } catch (error) {
  return {}
  }

};
