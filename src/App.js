import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Provider } from "./context/Provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
