import { useContext } from "react";
import SearchContext from "../../../helpers/searchContext";
import "./Category.css";

export default function Category(props) {
  const { category } = props;
  const { handleCategoryClick } =
    useContext(SearchContext);

  return (
    <div
      className="category-container"
      id={category.strCategory}
      onClick={handleCategoryClick}
    >
      <img
        className="category-image"
        src={`images/categories/${category.strCategory}.svg`}
        alt={category.strCategory}
      />
      <h2 className="category-text">{category.strCategory}</h2>
    </div>
  );
}
