import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsCard = () => {
  const data = useLoaderData();
  const { news_id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState({});

  useEffect(() => {
    const found = data.find((item) => item.id === news_id);
    if (found) {
      setNews(found);
    }
  }, [news_id, data]);

  const { title, image_url, details, author = {}, published_date, tags } = news;

  const formattedDate = new Date(
    author.published_date || published_date || new Date()
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 p-5 ">
      <div className="mb-4 text-sm font-semibold text-primary uppercase">
        Dragon News
      </div>

      <figure className="mb-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full object-cover max-h-[500px]"
        />
      </figure>

      <h2 className="text-2xl font-bold mb-3">{title}</h2>

      <div className="text-gray-600 text-sm mb-4">
        {formattedDate} |<span className="ml-1">Tags: {tags?.join(", ")}</span>
      </div>

      <p className="text-base text-gray-700 leading-relaxed">{details}</p>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-error btn-sm flex items-center gap-2"
        >
          <FaArrowLeft /> All news in this category
        </button>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
