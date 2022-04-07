import { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationContext from "../../../helpers/navigationContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { isSidebarOpen } = useContext(NavigationContext);
  let Sidebar = isSidebarOpen ? (
    <div className="sidebar-links">
      <Link className="sidebar-link" to={"/"}>
        Home
      </Link>
      <Link className="sidebar-link" to={"/categories"}>
        Categories
      </Link>
      <Link className="sidebar-link" to={"/recipes"}>
        Recipes
      </Link>
    </div>
  ) : null;
  return Sidebar;
}
