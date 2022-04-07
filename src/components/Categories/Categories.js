import { RecipeCategories } from "../../config/recipeCategories";
import Category from "./Category/Category";
import "./Categories.css";

export default function Categories() {
  const categoryList = RecipeCategories.map((category) => {
    return <Category category={category} key={category.idCategory} />;
  });
  return <section className="categories-container">{categoryList}</section>;
}
