import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  return (
    <div className="container mx-auto bg-base-100 min-h-screen">
      <Header></Header>
      <Navbar></Navbar>
      <main className="grid grid-cols-12 gap-5 mt-14">
        <section className="col-span-9">
          <NewsDetailsCard></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
