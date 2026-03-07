import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

export default function App() {
    return (<div className = "min-h screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>);
}
