import { SearchBar } from "../searchBar/SearchBar";
import { CartButton } from "../cartButton/CartButton";

export const Navbar = () => {

  const refreshPage = () => {
    window.location.reload(false);
  }
  
  return (
    <section className="nav-container">
      <div className="nav-content">
        <a href="#" className="navbar-brand" onClick={refreshPage}>
          HOME<span>BAKERY</span>
        </a>
        <SearchBar />
        <CartButton />
      </div>
    </section>
  );
};
