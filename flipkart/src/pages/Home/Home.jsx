import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./data.json";
import CarouselDemo from "./Carousel";
import Carousel2 from "./Carousel2";

const Home = () => {
  return (
    <Box>
      <Box p="12px" w="100%">
        <Box w="100%" boxShadow="0px 11px 8px -15px #111">
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              sm: "repeat(3,1fr)",
              "2xl": "repeat(9,1fr)",
            }}
            w={{ base: "85%", "2xl": "75%" }}
            m="auto"
            alignItems={"center"}
            p={{ base: "10px 0px 10px 0px ", "2xl": "15px" }}
            justifyContent={"space-between"}
            textAlign="center"
          >
            {data.head.map((ele) => {
              return (
                <Box
                  key={ele.title}
                  _hover={{ color: "blue" }}
                  cursor="pointer"
                >
                  <Image ml="auto" mr="auto" src={ele.img} w="55px" />
                  <Text fontSize={"13px"} mt="0px" fontWeight="500">
                    {ele.title}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box backgroundColor={"white"} m="auto" mt="15px" p="10px" w="99%">
          <Carousel
            axis="horizontal"
            autoPlay
            showThumbs={false}
            interval={"3000"}
            infiniteLoop
          >
            <Box>
              <Image src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/291f71468a6eff71.jpg?q=50" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/483fc2547747864a.jpeg?q=50" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2115ae301b2c5372.jpeg?q=50" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/11946434f052f86f.jpg?q=50" />
            </Box>
          </Carousel>
          <Box w="100%" m="auto" mt="-30px">
            <Image
              cursor={"pointer"}
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/86411e6addfb2db6.jpg?q=50"
              w="100%"
            />
          </Box>
        </Box>
        <Box
          w="99%"
          margin="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo data={data.top_Offers} heading={"Top Offers"} />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          rowGap={"5px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.first_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.fashion_deals}
            heading={"Top Deals on Fashion"}
          />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.mobile_offers.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box w="99%" m="auto">
          <Carousel2 data={data.featured_brands1}/>
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.best_electronics}
            heading={"Best of Electronics"}
          />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          w="99%"
          columnGap={"8px"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
        >
          {data.price_board1.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          display={"grid"}
          m="auto"
          mt="5px"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.third_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.best_fashion}
            heading={"Best Fashion Brands for You!"}
          />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          rowGap={"5px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.forth_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box w="99%" m="auto" mt="15px" mb="15px">
          <Carousel2 data={data.featured_brands2}/>
        </Box>
        <Box
          display={"grid"}
          m="auto"
          w="99%"
          columnGap={"8px"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
        >
          {data.card_discount.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.fashion_collection_from_199}
            heading={"Fashion Collection from ₹199"}
          />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          rowGap={"5px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.fifth_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.tv_appliances}
            heading={"Tvs & Appliances"}
          />
        </Box>
        <Box
          w="99%"
          m="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo
            data={data.electronics_deal}
            heading={"Top Deals on Electronics"}
          />
        </Box>
        <Box
          display={"grid"}
          m="auto"
          w="99%"
          columnGap={"8px"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
        >
          {data.price_board2.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          display={"grid"}
          m="auto"
          w="99%"
          columnGap={"8px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
        >
          {data.sixth_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="8px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
        <Box
          display={"grid"}
          m="auto"
          w="99%"
          columnGap={"8px"}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
        >
          {data.seventh_advt.map((el) => {
            return (
              <Image
                key={el}
                src={el}
                mt="6px"
                mr="auto"
                ml="auto"
                cursor={"pointer"}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
