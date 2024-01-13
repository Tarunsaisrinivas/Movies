import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../Scss/Header.scss";
import logo from '../assets/movies-tv.png'
import vid1 from '../assets/vid1.mp4'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "./Slide";
const Header = () => {
  
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div style={{ display: "flex ", flexWrap: "wrap" }}>
            <video src={vid1} width="100%" autoPlay muted loop>
              Your browser does not support the video tag.
            </video>

            <p
              className="details"
              style={{ position: "relative", top: "-100px" }}
            >
              Lorem ipsum dolor
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      
    </div>
  );
};

export default Header;
