import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../features/movieSlice/movieSlice";
function CardMovies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.trending);
  useEffect(() => {
    dispatch(getTrending());
  }, []);
  return (
    <div className=" h-3/4 ">
      <h3 className="text-yellow-300 text-2xl font-bold">
        Most Trending Movies
      </h3>

      <Swiper
        slidesPerView={1.3}
        style={{
          "--swiper-navigation-color": "rgb(250 202 21)",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper  xl:w-[95vw] mx-9"
      >
        {entities &&
          entities.map((item) => (
            <SwiperSlide>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
                className="w-64"
                onClick={() => navigate(`${item.id}`)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CardMovies;
