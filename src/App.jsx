import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Promotions from "./routes/Promotions";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FAEEE7]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
