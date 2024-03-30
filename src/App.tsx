import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from './component/MasterLayout';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
