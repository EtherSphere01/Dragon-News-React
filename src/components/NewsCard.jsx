import React, { useEffect, useState } from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news, id }) => {
  const {
    title,
    author,
    rating,
    total_view,
    image_url,
    published_date,
    details,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      <div className="flex items-center justify-between p-4 bg-base-200 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="px-4 mb-2">
        <h2 className="text-lg font-bold leading-snug mb-2">{title}</h2>
      </div>

      <figure className="px-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>

      <div className="px-4 pt-4 pb-2 text-sm text-gray-700 ">
        {details.slice(0, 200)}...
        <span className="text-orange-600 font-semibold cursor-pointer ml-1">
          Read More
        </span>
      </div>
      <div className="divider my-1" />

      <div className="pl-4">
        {news.tags.map((tag, index) => (
          <span
            key={index}
            className="badge badge-outline badge-sm mr-2 mb-2 bg-base-100 text-accent border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600 py-2">
        <div className="flex items-center gap-1 text-orange-500 font-medium">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-600 ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
