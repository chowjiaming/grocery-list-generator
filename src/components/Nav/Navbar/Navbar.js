import { Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";
import Hamburger from "../Hamburger/Hamburger";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-title" to={"/"}>
        Grocery List Generator
      </Link>
      <NavItems />
      <Hamburger />
    </nav>
  );
}
