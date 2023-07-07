import { SearchBar } from "../searchBar/SearchBar";
import { CartButton } from "../cartButton/CartButton";

export const Navbar = () => {
  return (
    <section className="nav-container">
      <div className="nav-content">
        <a href="#" className="navbar-brand">
          HOME<span>BAKERY</span>
        </a>
        <SearchBar />
        <CartButton />
      </div>
    </section>
  );
};
