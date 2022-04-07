import { Fragment } from "react";
import { NavigationProvider } from "../helpers/navigationContext";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Hero from "./Hero/Hero";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";

export default function Main() {
  return (
    <Fragment>
      <NavigationProvider>
        <Navbar />
        <Sidebar />
      </NavigationProvider>
      <Hero />
      <Search />
      <Categories />
    </Fragment>
  );
}
