import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
    setCurrentPage(1);
  }, [data, id]);

  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch("/demo-data/categories.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        if (found) {
          setCategory(found.name);
        }
      });
  }, [id]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = categoryNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categoryNews.length / itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        <h1 className="font-bold">{category}</h1>
        {currentNews.map((news) => (
          <NewsCard key={news.id} news={news} id={id}></NewsCard>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn btn-sm ${
              currentPage === index + 1 ? "btn-primary" : "btn-outline"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
