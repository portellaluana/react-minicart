import { useState } from "react";
import { fetchCep } from "../../../../api/fetchProducts";

export const Shipping = () => {
  const [address, setAddress] = useState({});

  const handleCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetchCep(cep).then((CEP) => {
      setAddress(CEP);
    });
  };

  return (
    <div className="shipping-container">
      <h5>informações para entrega</h5>
      <label>CEP</label>
      <input onBlur={handleCep} placeholder="Digite seu cep"></input>

      <label>logradouro</label>
      <p placeholder="logradouro">{address.logradouro}</p>

      <div className="address-number">
        <div className="numero">
        <label>número</label><br/>
        <input placeholder="Número" />
        </div>

        <div className="complemento">
        <label>complemento</label>
        <input placeholder="Complemento" />
        <div/>
      </div>
      </div>
      <label>Bairro</label>
      <p placeholder="Digite seu bairro">{address.bairro}</p>

      <label>Cidade</label>
      <p placeholder="cidade">{address.localidade}</p>

      <label>UF</label>
      <p placeholder="uf">{address.uf}</p>
    </div>
    
  );
};
