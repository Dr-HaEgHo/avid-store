import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import FormikForm from "./pages/auth/FormikForm";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
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
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/login" element={ <Login/> } />
          <Route path="/formik" element={ <FormikForm/> } />
          <Route path="products/:prodName" element={<ProductDetails/>} /> 
          <Route path="cart" element={<Cart/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
