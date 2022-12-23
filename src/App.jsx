import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Smartphones from "./pages/Smartphones.jsx";
import NavBar from './components/NavBar.jsx'
import Err404 from "./pages/Err404";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/smartphones" element={<Smartphones/>}/>
        <Route path="*" element={<Err404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
