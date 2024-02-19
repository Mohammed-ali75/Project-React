import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Rate from "./rate";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="backSkills">
        <div className="skillsAll" id="Skills">
          <h2 className="h2skills">Skills</h2>
          <p className="pSkills">you can see my skills here</p>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Rate name="HTML&CSS" percent="95" />
            </SwiperSlide>
            <SwiperSlide>
              <Rate name="HTML5&CSS3" percent="90" />
            </SwiperSlide>
            <SwiperSlide>
              <Rate name="Java Script" percent="80" />
            </SwiperSlide>
            <SwiperSlide>
              <Rate name="React" percent="85" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Skills;
