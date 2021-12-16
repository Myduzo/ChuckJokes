import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import axios from "axios";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import MonoSection from "./components/MonoSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const api = axios.create({
  baseURL: `https://api.chucknorris.io/jokes/`,
});

function App() {
  api.get("search?query=all").then((res) => {
    console.log(res.data);
  });

  const homePage = (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );

  const stats = (
    <div>
      <Navbar />
      <Hero />
      <MonoSection />
      <Footer />
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/stats" element={stats} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
