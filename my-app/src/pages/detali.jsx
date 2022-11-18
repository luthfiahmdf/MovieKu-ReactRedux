import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Rating } from "flowbite-react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import "../components/components.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import avatar from "../components/assets/avatar.png";
import Nav from "../components/nav";
import { getMoviesCredit } from "../features/movieSlice/castMovies";
import { getMoviesDetail } from "../features/movieSlice/detailMovies";
import Foot from "../components/footer";
import { getTrailer } from "../features/movieSlice/trailerSlice";
import { getMoviesReview } from "../features/movieSlice/reviewSlice";
function Detail() {
  const dispatch = useDispatch();
  const [clamp, setClamp] = useState();
  const clamping = () => {
    setClamp(false);
  };

  const { id } = useParams();
  const { credit } = useSelector((state) => state.cast);
  const { entities } = useSelector((state) => state.detail);
  const { trailer } = useSelector((state) => state.trailer);
  const { review } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(getMoviesDetail(id));
    dispatch(getMoviesCredit(id));
    dispatch(getTrailer(id));
    dispatch(getMoviesReview(id));
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
        <div className="descriptions flex justify-center items-center flex-col my-4 ">
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
          <div>
            <Rating>
              <Rating.Star />{" "}
              <p className="ml-2   text-white ">
                <span className="text-yellow-300">Rating :</span>{" "}
                {Math.ceil(entities.vote_average).toFixed()} out of 10
              </p>
            </Rating>
          </div>

          <h2 className="max-w-[80vw] text-white line-clamp-3 xl:line-clamp-none">
            <span className="text-yellow-300">Overview : </span>{" "}
            {entities.overview}
          </h2>
        </div>
        <div className="trailer">
          {trailer &&
            trailer.slice(0, 1).map((item) => (
              <div className="sizing">
                <h3 className="text-center text-yellow-300 text-2xl font-bold my-7">
                  Trailer
                </h3>
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  className="w-[300px] h-[200px] xl:w-[1000px] xl:h-[500px] lg:w-[800] lg:h-[400] md:w-[700] md:h-[350]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
        </div>

        <div className="review_cast container">
          <h1 className="text-yellow-300 font-bold text-2xl text-center my-7">
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
        <div className="reviews mx-9 ">
          <h1 className="text-yellow-300 font-bold text-2xl text-center my-7">
            Reviews
          </h1>
          {review &&
            review.slice(0, 3).map((item) => (
              <div className="content  bg-primary-200 rounded-lg flex flex-col my-5 ">
                <div className="user flex flex-row  space-x-3 ml-3 p-2">
                  <Avatar img={avatar} rounded={true} className="" />
                  {/* <img src={avatar} alt="" className="rounded-full h-9" /> */}
                  <p className="text-left items-center flex justify-center font-bold text-white">
                    {item.author}
                  </p>

                  <Rating className="item-center text-white">
                    <Rating.Star />
                    {item.author_details.rating}
                  </Rating>
                </div>
                <p className="font-normal text-white dark:text-gray-400 mx-7 my-3 line-clamp-6 xl:line-clamp-none">
                  {item.content}
                </p>
              </div>
            ))}
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Detail;
