import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getTvShow } from "../features/movieSlice/trendingSlice";
import { useNavigate } from "react-router-dom";
function Trending() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.tvShow);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTvShow());
  }, []);
  return (
    <div>
      <div className="max-w-sm grid grid-cols-2 mx-9 xl:grid-cols-4 xl:grid">
        {entities &&
          entities.map((item) => (
            <Card
              imgSrc={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="w-auto"
              onClick={() => navigate(`${item.id}`)}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Trending;
