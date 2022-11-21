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
      <div className="h-screen   xl:h-screen ">
        <Carousel indicators={false}>
          {entities &&
            entities
              .slice(4, 8)
              .map((item) => (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt="..."
                  className="saturate-50 h-screen object-cover"
                />
              ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
