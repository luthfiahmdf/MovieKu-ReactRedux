import React, { useEffect } from "react";
import { Button } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../features/movieSlice/genreListSlice";

function ListGenre() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  useEffect(() => {
    dispatch(getMoviesList());
  }, []);
  return (
    <div className="mt-2 mx-9">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {list &&
          list.map((item) => (
            <SwiperSlide>
              <Button color="warning" pill={true} className="w-28">
                {item.name}
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ListGenre;
