import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./data.json";
import TopOffers from "./TopOffers";

const Home = () => {
  return (
    <Box>
      <Box p="12px" w="100%">
        <Box w="100%" boxShadow="0px 11px 8px -15px #111">
          <Box
            display={"flex"}
            w="75%"
            m="auto"
            alignItems={"center"}
            p="15px"
            justifyContent={"space-between"}
          >
            {data.head.map((ele) => {
              return (
                <Box
                  key={ele.title}
                  _hover={{ color: "blue" }}
                  cursor="pointer"
                >
                  <Image src={ele.img} w="55px" />
                  <Text fontSize={"13px"} mt="0px" fontWeight="500">
                    {ele.title}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box backgroundColor={"white"} mt="15px" p="10px">
          <Carousel axis="horizontal" autoPlay interval={"3000"} infiniteLoop>
            <Box>
              <Image src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/a01995f8c2dc7ebd.jpg?q=50" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/flap/1000/1000/image/5655d35aa959ffe8.jpg" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/flap/1000/1000/image/a9193a4988ff1328.jpg" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/flap/1000/1000/image/938d2f267807952f.jpg" />
            </Box>
            <Box>
              <Image src="https://rukminim1.flixcart.com/flap/1000/1000/image/e284b77bb80114f7.jpg" />
            </Box>
          </Carousel>
          <Box
            w="60%"
            m="auto"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="15px"
            cursor={"pointer"}
            justifyContent={"space-between"}
            alignItems="center" display={"flex"}
          >
            <Image
              src="https://cdn0.desidime.com/attachments/photos/734395/original/Flipkart-ICICI-Bank-Cards-Offer-1024x147.jpg?1642137302"
              w="70%"
            />
            <Text fontSize={"25px"} fontWeight="600">
              10% Instant Discount*
            </Text>
          </Box>
        </Box>
        <Box>
          <TopOffers />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
