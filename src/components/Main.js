import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { NavigationProvider } from "../helpers/navigationContext";
import Navbar from "./Nav/Navbar/Navbar";
import Sidebar from "./Nav/Sidebar/Sidebar";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Recipes from "./Recipes/Recipes";

export default function Main() {
  return (
    <Fragment>
      <NavigationProvider>
        <Navbar />
        <Sidebar />
      </NavigationProvider>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Fragment>
  );
}
