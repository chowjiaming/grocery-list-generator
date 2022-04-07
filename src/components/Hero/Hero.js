import Search from "../Shared/Search/Search";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <img
        className="hero-image"
        src="images/recipe-book.svg"
        alt="recipe-book"
      />
      <h1 className="hero-text">Search your recipes</h1>
      <Search />
    </section>
  );
}
