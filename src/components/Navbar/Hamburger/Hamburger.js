import { useContext } from "react";
import NavigationContext from "../../../helpers/navigationContext";
import "./Hamburger.css";

export default function Hamburger() {
  const { isSidebarOpen, toggleSidebar } = useContext(NavigationContext);

  return (
    <div className="hamburger-lines" onClick={toggleSidebar}>
      <span
        className={`line line1 ${isSidebarOpen ? "open" : null}`}
      ></span>
      <span
        className={`line line2 ${isSidebarOpen ? "open" : null}`}
      ></span>
      <span
        className={`line line3 ${isSidebarOpen ? "open" : null}`}
      ></span>
    </div>
  );
}
