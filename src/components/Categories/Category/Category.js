import "./Category.css";

export default function Category(props) {
  const { category } = props;
  console.log(category);
  return (
    <div className="category-container">
      <img
        className="category-image"
        src={`images/categories/${category.strCategory}.svg`}
        alt={category.strCategory}
      />
      <h2 className="category-text">{category.strCategory}</h2>
    </div>
  );
}
