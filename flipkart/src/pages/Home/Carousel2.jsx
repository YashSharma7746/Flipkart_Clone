import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {v3} from "uuid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel2 = ({ data }) => {
  return (
    <Box backgroundColor={"white"} p="10px 5px" mt="10px">
      <Swiper
        modules={[Navigation]}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <Grid templateColumns={"repeat(4,1fr)"} m="auto">
          {data.map((el, i) => {
            return (
              <Box key={v3}>
                <SwiperSlide>
                  <Image src={el} cursor="pointer" />
                </SwiperSlide>
              </Box>
            );
          })}
        </Grid>
      </Swiper>
    </Box>
  );
};

export default Carousel2;
