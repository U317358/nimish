

import About from "./components/about";
import Form from "./components/form";
import Home from "./components/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainpage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <MainPage />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <ToastContainer />
    </BrowserRouter>
  );
}

export default App;  