import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../components/components.css";
import Foot from "../components/footer";
import Nav from "../components/nav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./pages.css";
import { Button } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Rating, Tabs } from "flowbite-react";
import { getMoviesDetail } from "../features/movieSlice/detailMovies";
import { getMoviesCredit } from "../features/movieSlice/castMovies";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { credit } = useSelector((state) => state.cast);
  const { entities } = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getMoviesDetail(id));
    dispatch(getMoviesCredit(id));
  }, []);

  return (
    <div className="background container max-w-fit">
      <Nav />
      <div className="content">
        <div className="top relative flex place-items-center">
          <img
            src={`https://image.tmdb.org/t/p/original${entities.backdrop_path}`}
            className="h-[80vh]  lg:w-[100vw] object-cover "
            alt=""
          />
        </div>
        <div className="title p-3  w-screen top-96 bg-transparent absolute xl:mx-9 container">
          <h3 className="title text-yellow-300 font-bold text-2xl">
            {entities.title}
            <Rating>
              <Rating.Star />
              <p className="ml-2 text-sm font-medium text-white dark:text-gray-400">
                {Math.ceil(entities.vote_average).toFixed()} out of 10
              </p>
            </Rating>
          </h3>
          <p className="text-white container w-80">{entities.overview}</p>
          <div className="genre">
            {entities.genres &&
              entities.genres.map((item) => {
                return (
                  <ul className="inline-block text-md mb-7 text-white ">
                    <Button color="warning" pill={true}>
                      <li>{item.name}</li>
                    </Button>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className="review_cast container">
          <h1 className="text-yellow-300 font-bold text-2xl">Cast</h1>
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
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper overflow-x-hidden mx-9"
          >
            {credit &&
              credit.map((item) => (
                <SwiperSlide className="deta ">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt=""
                  />
                  <p className="name text-white">{item.name}</p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="container">
        <Foot />
      </div> */}
    </div>
  );
}

export default Details;
