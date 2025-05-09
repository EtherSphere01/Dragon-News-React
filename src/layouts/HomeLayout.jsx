import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="container mx-auto ">
      <header>
        <Header></Header>
        <section className="mx-3 md:mx-0">
          <LatestNews></LatestNews>
        </section>
        <nav className="mx-3 md:mx-0">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="mx-3 md:mx-0 mt-14 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
