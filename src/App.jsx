import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WeatherProvider } from "./context/WeatherContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
