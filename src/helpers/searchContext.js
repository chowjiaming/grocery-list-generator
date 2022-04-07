import { createContext, useState } from "react";
import useFetchRecipe from "./useGetRecipe";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchCategory, setSearchCategory] = useState("Chicken");
  const { recipe, isLoading, error } = useFetchRecipe(
    `filter.php?c=${searchCategory}`
  );

  const handleCategoryClick = (e) => {
    const value = e.target.id;
    setSearchCategory(value);
  };

  return (
    <SearchContext.Provider
      value={{ searchCategory, handleCategoryClick, recipe, isLoading, error }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
