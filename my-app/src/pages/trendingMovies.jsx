import React, { useEffect } from "react";
import { Card, Rating } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import "../pages/pages.css";
import { getTrending } from "../features/movieSlice/movieSlice";
import { useNavigate } from "react-router-dom";
function Trending() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.trending);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTrending());
  }, []);
  return (
    <div>
      <h3 className="text-left text-yellow-300 font-bold text-2xl ml-9 mt-2">
        Movies
      </h3>
      <div className=" xl:max-w-fit grid grid-cols-2 bg-primary-100 justify-center items-center gap-8 mx-9 xl:grid xl:grid-cols-5 md:grid md:grid-cols-3 mt-5">
        {entities &&
          entities.slice(0, 10).map((item) => (
            <div className="movie_card">
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
                className=""
                onClick={() => navigate(`${item.id}`)}
              />
              <div className="description">
                <h3>{item.title}</h3>
                <Rating>
                  <Rating.Star className="stars" />{" "}
                  <h3>{Math.ceil(item.vote_average).toFixed()} out of 10</h3>
                </Rating>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Trending;
