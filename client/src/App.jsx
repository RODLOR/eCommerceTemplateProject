import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import Err404 from "./pages/Err404";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <NavBar />
        <div className="md:pt-20 pt-32 mt-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="*" element={<Err404 />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
