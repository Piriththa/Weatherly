import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Weatherly</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
