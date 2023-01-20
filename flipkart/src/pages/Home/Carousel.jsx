import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselDemo = ({ data, heading }) => {
  console.log(data);
  return (
    <Box
      w="100%"
      backgroundColor={"white"}
      display={{ base: "block", sm: "block", "2xl": "flex" }}
      justifyContent="space-between"
      textAlign={"left"}
      p="10px"
      mb="40px"
    >
      <Box
        w="300px"
        textAlign={"center"}
        display="flex"
        flexDirection={{base:"row","2xl":"column"}}
        justifyContent={{"2xl":"center"}}
        alignItems={"center"}
        gap="10px"
      >
        <Heading fontWeight={"400"} fontSize={{base:"lg","2xl":"2xl"}}>{heading}</Heading>
        <Button backgroundColor={"#2874F0"} colorScheme="#2874F0" size={{base:"sm","2xl":"lg"}}>
          View All
        </Button>
      </Box>
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
        <Grid templateColumns={"repeat(5,1fr)"} w="90%" m="auto">
          {data.map((el, i) => {
            console.log(el.img);
            return (
              <Box key={Date.now()}>
                <SwiperSlide>
                  <Link to={el.link}>
                    <Box textAlign="center" cursor="pointer">
                      <Box
                        display={"flex"}
                        h={{base:"80px",xl:"200px","2xl":"200px"}}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Image src={el.img} w={{base:"50px","2xl":"auto"}} />
                      </Box>
                      <Text fontWeight={"600"} fontSize={{base:"10px",xl:"14px","2xl":"14px"}}>
                        {el.title}
                      </Text>
                      <Text fontWeight={"350"} fontSize={{base:"11px",xl:"17px","2xl":"17px"}} color="green">
                        {el.price}
                      </Text>
                      <Text fontWeight={"250"} fontSize={{base:"9.5px",xl:"13px","2xl":"13px"}}>
                        {el.footer}
                      </Text>
                    </Box>
                  </Link>
                </SwiperSlide>
              </Box>
            );
          })}
        </Grid>
      </Swiper>
    </Box>
  );
};

export default CarouselDemo;
