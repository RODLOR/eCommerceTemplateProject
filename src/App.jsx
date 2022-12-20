import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Form from "./pages/Form.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
