import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles/globals.scss";
import Header from "./components/header";
import Menu from "./components/menu";
import Product from "./components/product";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <>
      <Header isMenuOpen={[isMenuOpen, setIsMenuOpen]} cart={[cart, setCart]} />
      <Menu isMenuOpen={[isMenuOpen, setIsMenuOpen]} />
      <Product cart={[cart, setCart]} />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);