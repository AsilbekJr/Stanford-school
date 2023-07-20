import { Box, Typography } from "@mui/material";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/OurTeachers.css";
const OurTeachers = () => {
  return (
    <Box className="container">
      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          sx={{
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: {
              lg: "1.9rem",
              md: "1.7rem",
              sm: "1.5rem",
              xs: "1rem",
            },
            letterSpacing: "1px",
          }}
          variant="h1"
        >
          {" "}
          O'qituvchilarimiz
        </Typography>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Box className="cart-wrapper">
            <img
              className="cart-img"
              src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
            />
            <Box sx={{ padding: "1rem 0" }}>
              <Typography variant="h5" className="cart-title">
                Anora Sodiqova
              </Typography>
              <Typography variant="h7" className="cart-subtitle">
                IELTS 7+
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="cart-wrapper">
            <img
              className="cart-img"
              src="https://t4.ftcdn.net/jpg/02/44/80/33/360_F_244803369_cNviClISSSUV5FGcYsJR9anLrqiRrHVK.jpg"
            />
            <Box sx={{ padding: "1rem 0" }}>
              <Typography variant="h5" className="cart-title">
                Jamshid Botirov
              </Typography>
              <Typography variant="h7" className="cart-subtitle">
                CEFR C1
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="cart-wrapper">
            <img
              className="cart-img"
              src="https://t3.ftcdn.net/jpg/02/85/98/32/360_F_285983211_MgoZj1sj9Rfou8GRHtCvHtdgyEMxGEFS.jpg"
            />
            <Box sx={{ padding: "1rem 0" }}>
              <Typography variant="h5" className="cart-title">
                Aziz Hazratov
              </Typography>
              <Typography variant="h7" className="cart-subtitle">
                {" "}
                IELTS 7+
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="cart-wrapper">
            <img
              className="cart-img"
              src="https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg"
            />
            <Box sx={{ padding: "1rem 0" }}>
              <Typography variant="h5" className="cart-title">
                Sanobar Ergashova
              </Typography>
              <Typography variant="h7" className="cart-subtitle">
                IELTS 7+
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="cart-wrapper">
            <img
              className="cart-img"
              src="https://thumbs.dreamstime.com/b/portrait-young-female-teacher-white-portrait-young-female-teacher-white-background-157216197.jpg"
            />
            <Box sx={{ padding: "1rem 0" }}>
              <Typography variant="h5" className="cart-title">
                Fotima Masutova
              </Typography>
              <Typography variant="h7" className="cart-subtitle">
                IELTS 8
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        ...
      </Swiper>
    </Box>
  );
};

export default OurTeachers;
