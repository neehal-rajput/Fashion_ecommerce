
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import menBanner from "./components/Assets/banner_mens.png"
import womenBanner from './components/Assets/banner_women.png'
import kidsBanner from  './components/Assets/banner_kids.png'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={menBanner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
