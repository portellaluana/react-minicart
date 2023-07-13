import { SearchBar } from "../searchBar/SearchBar";
import { CartButton } from "../cartButton/CartButton";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const refreshPage = () => {
    window.location.reload(false);
  }
  
  return (
    <section className="nav-container">
      <div className="nav-content">
      <Link className="navbar-brand" onClick={refreshPage} to="/">
      HOME<span>BAKERY</span></Link>
       
        <SearchBar />
        <CartButton />
      </div>
    </section>
  );
};
