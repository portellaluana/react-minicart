import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <section className="nav-container">
        <div className="nav-content">
          <Link className="navbar-brand" to="/">
            HOME<span>BAKERY</span>
          </Link>

          <Link className="not-found-btn" to="/">
            continuar comprando
          </Link>
        </div>
      </section>
    </>
  );
};
