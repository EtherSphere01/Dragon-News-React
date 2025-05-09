import React, { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigate();
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
      <Suspense fallback={<Loading />}>
        <main className="mx-3 md:mx-0 mt-14 grid grid-cols-12 gap-5">
          <aside className="col-span-3 sticky top-10 h-fit ">
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-6">
            {state == "loading" ? <Loading /> : <Outlet />}
          </section>
          <aside className="col-span-3 sticky top-10 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </Suspense>
    </div>
  );
};

export default HomeLayout;
