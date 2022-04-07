import { useContext } from "react";
import NavigationContext from "../../helpers/navigationContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { isSidebarOpen } = useContext(NavigationContext);
  let Sidebar = isSidebarOpen ? (
    <div class="sidebar-items">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Categories</a>
      </li>
      <li>
        <a href="/">Recipes</a>
      </li>
    </div>
  ) : null;
  return Sidebar;
}
