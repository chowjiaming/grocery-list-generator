import NavItems from "./NavItems/NavItems";
import Hamburger from "./Hamburger/Hamburger";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Grocery List Generator</h1>
      <NavItems />
      <Hamburger />
    </nav>
  );
}
