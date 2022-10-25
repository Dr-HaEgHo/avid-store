import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import './App.css'
import './mediaQueries.css'
import Navbar from "./components/navbar/Navbar";
import FormikForm from "./pages/auth/FormikForm";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";
import NavTray from "./components/NavTray";


function App() {

  const [openNav, setOpenNav] = useState(false)

  return (
    <div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <NavTray openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path="/">
          <Route index element={<Home openNav={openNav} setOpenNav={setOpenNav} />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/login" element={ <Login/> } />
          <Route path="/formik" element={ <FormikForm/> } />
          <Route path="products/:prodName" element={<ProductDetails/>} /> 
          <Route path="categories/:catName" element={<Categories/>} /> 
          <Route path="cart" element={<Cart/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
