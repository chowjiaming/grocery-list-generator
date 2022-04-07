import { createContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavigationContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
