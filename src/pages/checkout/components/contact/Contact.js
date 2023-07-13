export const Contact = () => {
return (
    <div className="contact-container">
    <h5>Informações de contato</h5>

      <label>nome</label>
      <input placeholder="Digite seu nome"></input>

      <label>email</label>
      <input placeholder="Digite seu email"></input>
       <div className="checkbox-content">
        <input type="checkbox" className="checkbox-input"></input>
        <p>Desejo receber promoções exclusivas</p>
        </div>
        <button className="button-primary">Ir para pagamentos</button>

    </div>
)
}