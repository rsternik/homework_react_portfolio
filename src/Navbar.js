// Router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Robert Sternik</h1>
      <div className="links">
        <Link to="/" className="button">HOME</Link>
        <Link to="/About" >ABOUT</Link>
        <Link to="/Projects" >PROJECTS</Link>
        <Link to="/Contact" >CONTACT</Link>
        <Link to="/Resume" >RESUME</Link>
      </div>
    </nav>
  );
}

export default Navbar;