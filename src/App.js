import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./components/products/Products";
import { Minicart } from "./components/minicart/Minicart";
import { Provider } from "./context/Provider";

function App() {
  return (
    <Provider>
      <Navbar />
      <Products />
      <Minicart />
    </Provider>
  );
}

export default App;
