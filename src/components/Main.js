import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";

export default function Main() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Search />
      <Categories />
    </Fragment>
  );
}
