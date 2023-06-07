import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Characters from "./screens/Characters";
import Contact from "./screens/Contact";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
