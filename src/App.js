import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Checkout } from "./pages/checkout/Checkout";

import { Provider } from "./context/Provider";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
