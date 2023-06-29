import { Navbar } from "../components/navbar/Navbar";
import { Vitrine } from "../components/vitrine/Vitrine";
import { Minicart } from "../components/minicart/Minicart";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Vitrine />
      <Minicart />
    </>
  );
};
