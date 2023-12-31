import { Card } from "flowbite-react";
import React from "react";
import { FaThumbsUp, FaBriefcase, FaListOl } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chefData }) => {
  const { id, picture, name, likes, years_of_experience, number_of_recipes } =
    chefData;
  return (
    <LazyLoad
      height={460}
      onContentVisible={() => {
        console.log("loaded!");
      }}
      once
    >
      <Card className="border mb-2 md:mb-0" imgSrc={picture}>
        <h5 className="text-xl md:text-2xl font-bold tracking-tight text-amber-800">
          {name}
        </h5>
        <div className="flex flex-col gap-2 font-normal">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center gap-1 border px-1 rounded-md  text-sm">
              <FaThumbsUp></FaThumbsUp>
              <span>Likes: {likes}</span>
            </div>
            <div className="flex items-center justify-center gap-1 border px-1 rounded-md  text-sm">
              <FaBriefcase></FaBriefcase>
              <span>Years of experience: {years_of_experience}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-sm">
            <FaListOl></FaListOl>
            <span>Numbers of recipes: {number_of_recipes}</span>
          </div>
        </div>
        <Link
          to={`/chef-details/${id}`}
          type="button"
          className="w-full bg-gray-300 border border-gray-300 hover:bg-gray-500 hover:text-white font-medium rounded-md text-sm px-5 py-2 text-center"
        >
          View Recipes
        </Link>
      </Card>
    </LazyLoad>
  );
};

export default ChefCard;
