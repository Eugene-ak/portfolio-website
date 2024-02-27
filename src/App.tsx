import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Skills />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
