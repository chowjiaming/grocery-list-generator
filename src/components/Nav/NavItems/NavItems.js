import { Link } from "react-router-dom";
import "./NavItems.css";

export default function NavItems() {
  return (
    <div className="navbar-links">
      <Link className="navbar-link" to={"/"}>Home</Link>
      <Link className="navbar-link" to={"/categories"}>Categories</Link>
      <Link className="navbar-link" to={"/recipes"}>Recipes</Link>
    </div>
  );
}
