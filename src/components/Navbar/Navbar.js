import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="nav-icon"
        src="images/groceries-icon.svg"
        alt="groceries-icon"
      />
      <h1 className="recipes-nav">Recipes</h1>
    </nav>
  );
}
