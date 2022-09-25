import {
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products/:prodName" element={<ProductDetails/>} /> 
          <Route path="cart" element={<Cart/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
