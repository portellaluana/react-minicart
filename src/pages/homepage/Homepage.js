import { Navbar } from "../../components/navbar/Navbar";
import { NotFound } from "../../components/products/NotFound";
import { Products } from "../../components/products/Products";
import { Minicart } from "../../components/minicart/Minicart";


export const Homepage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
      <Products />
      <Minicart />
    </>
  );
};
