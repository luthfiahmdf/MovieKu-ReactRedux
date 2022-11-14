import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../features/movieSlice/movieSlice";
function Hero() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.trending);
  useEffect(() => {
    dispatch(getTrending());
  }, []);
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-screen 2xl:h-96 ">
        <Carousel indicators={false}>
          {entities &&
            entities
              .slice(4, 8)
              .map((item) => (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt="..."
                  className="saturate-50"
                />
              ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
