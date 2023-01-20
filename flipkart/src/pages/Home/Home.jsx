import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./data.json";
import CarouselDemo from "./Carousel";

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
        <Box backgroundColor={"white"} mt="15px" p="10px">
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
          margin="auto"
          justifyContent={"center"}
          alignItems="center"
          mt="15px"
        >
          <CarouselDemo data={data.top_Offers} heading={"Top Offers"} />
        </Box>
        <Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
