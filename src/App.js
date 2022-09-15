import {
  Routes,
  Route,
} from "react-router-dom";
import './app.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",