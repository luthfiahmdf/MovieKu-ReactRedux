import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Rating } from "flowbite-react";
import { useParams } from "react-router-dom";
import "../components/components.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import avatar from "../components/assets/avatar.png";
import Nav from "../components/nav";
import { getMoviesCredit } from "../features/movieSlice/castMovies";
import { getMoviesDetail } from "../features/movieSlice/detailMovies";
import Foot from "../components/footer";
function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { credit } = useSelector((state) => state.cast);
  const { entities } = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getMoviesDetail(id));
    dispatch(getMoviesCredit(id));
  }, []);
  return (
    <div className=" bg-primary-100">
      <Nav />
      <div className=" flex justify-center items-center flex-col">
        <img
          src={`https://image.tmdb.org/t/p/original${entities.backdrop_path}`}
          alt=""
          className="w-[80%] lg:max-w-[75%] items-center rounded-xl saturate-50 "
        />
        <div className="description flex justify-center items-center flex-col my-4 ">
          <h3 className="text-center text-yellow-300 font-semibold text-2xl max-w-[70vw]">
            {entities.title}
          </h3>

          <div className="genre">
            <h3 className="text-white">
              <span className="text-yellow-300">Genre :</span>{" "}
              {entities.genres && entities.genres[0].name},{" "}
              {entities.genres && entities.genres[1].name}
            </h3>
          </div>
          <div className="rating">
            <Rating>
              <Rating.Star />{" "}
              <p className="ml-2   text-white ">
                <span className="text-yellow-300">Rating :</span>{" "}
                {Math.ceil(entities.vote_average).toFixed()} out of 10
              </p>
            </Rating>
          </div>

          <h2 className="max-w-[80vw] text-white">
            <span className="text-yellow-300">Overview : </span>{" "}
            {entities.overview}
          </h2>
        </div>

        <div className="review_cast container">
          <h1 className="text-yellow-300 font-bold text-2xl text-center">
            Cast
          </h1>
          <Swiper
            slidesPerView={1.3}
            style={{
              "--swiper-navigation-color": "rgb(250 202 21)",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1080: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper  mx-9"
          >
            {credit &&
              credit.map((item) => (
                <SwiperSlide className="deta ">
                  {item.profile_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      alt=""
                      className="rounded-xl max-w-[80%]"
                    />
                  ) : (
                    <img
                      src={avatar}
                      alt=""
                      className="rounded-xl max-w-[80%] "
                    />
                  )}

                  <p className="name text-white">{item.name}</p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Detail;
