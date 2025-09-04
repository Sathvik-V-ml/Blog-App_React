import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Posts from "./Components/Posts";

export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/posts" style={linkStyle}>Posts</Link>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};
