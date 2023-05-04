import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/Cart";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
