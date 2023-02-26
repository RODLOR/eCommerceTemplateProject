import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Smartphones from "./pages/Smartphones.jsx";
import NavBar from "./components/NavBar.jsx";
import Err404 from "./pages/Err404";
import DealsPage from "./pages/DealsPage";

const App = () => {
  return (
    <div className="bg-lime-500 ">
      <BrowserRouter>
        <NavBar />
        <main className="pt-24 mt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
