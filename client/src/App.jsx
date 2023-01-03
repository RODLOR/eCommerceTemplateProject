import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Smartphones from "./pages/Smartphones.jsx";
import NavBar from "./components/NavBar.jsx";
import Err404 from "./pages/Err404";
import DealsPage from "./pages/DealsPage";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-full">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
