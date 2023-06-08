import { Routes, Route } from "react-router-dom";

import Characters from "./screens/Characters";
import Contact from "./screens/Contact";
import DetailsCharacter from "./screens/DetailsCharacter";

import Home from "./screens/Home";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<DetailsCharacter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
