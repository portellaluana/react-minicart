import NavbarBS from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { SearchBar } from "../searchBar/SearchBar";
import { CartButton } from "../cartButton/CartButton";

export const Navbar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#">
          HOME<span>BAKERY</span>
        </NavbarBS.Brand>
        <SearchBar />
        <CartButton />
      </Container>
    </NavbarBS>
  );
};
