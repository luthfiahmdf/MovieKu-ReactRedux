import React, { useEffect } from "react";
import { Dropdown, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/nav";
import "../pages/pages.css";
import avatar from "../components/assets/avatar.png";
import { Rating } from "flowbite-react";
import { getGenre } from "../features/movieSlice/categorySlice";
import { getMoviesList } from "../features/movieSlice/genreListSlice";
import Foot from "../components/footer";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.list);
  const { entities, load } = useSelector((state) => state.genre);
  const { name } = useParams();

  useEffect(() => {
    dispatch(getMoviesList());
    dispatch(getGenre(name));
  }, [name]);
  return (
    <div className="bg-primary-100">
      <Nav />
      <div className="head flex flex-row justify-between">
        <div className="headleft">
          <h3 className="text-left text-yellow-300 font-bold text-2xl ml-9 mt-2">
            {name} Movies
          </h3>
        </div>
        <div className="headRight text-right text-yellow-300 font-bold text-2xl mr-9  items-end mt-2">
          <Dropdown label="" inline={true}>
            {list &&
              list
                .slice(0, 7)
                .map((item) => (
                  <Dropdown.Item
                    onClick={() => navigate(`/category/${item.name}`)}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
          </Dropdown>
        </div>
      </div>

      <div className="movie xl:max-w-fit grid grid-cols-2 bg-primary-100 justify-center items-center gap-8 mx-9 xl:grid xl:grid-cols-5 md:grid md:grid-cols-3 mt-5">
        {entities &&
          entities.map((item) => (
            <div className="movie_card">
              {item.poster_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                  className="min-w-[50%]"
                  onClick={() => navigate(`/${item.id}`)}
                />
              ) : (
                <img src={avatar} alt="" />
              )}

              <div className="description">
                <h3 className="line-clamp-2 text-center">{item.title}</h3>
                <Rating>
                  <Rating.Star className="stars" />{" "}
                  <h3>{Math.ceil(item.vote_average).toFixed()} out of 10</h3>
                </Rating>
              </div>
            </div>
          ))}
      </div>
      <Foot />
    </div>
  );
}

export default Category;
