import React from "react";
import { Text, Box, Image, Button } from "@chakra-ui/react";
import {
  FashionCarousalData1,
  FashionCarousalData2,
  FashionCarousalData3,
} from "./Fashion.Carousel.Data";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
export const Fashion = () => {
  return (
    <Box w="100%" p="10px" bg="#f1f3f6">
      <Text
        textAlign={"left"}
        mt="60px"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="18px"
        fontWeight="500"
        lineHeight="25px"
        color="#212121"
      >
        Sale is Live
      </Text>
      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/669c835e28a21a49.jpg?q=80"
        display="block"
        m="auto"
      />
      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/af0001ec0f1dd4cd.jpg?q=50"
        display="block"
        m="auto"
      />

      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          textAlign={"left"}
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="22px"
          fontWeight="500"
          lineHeight="25px"
          color="#212121"
          ml="15px"
        >
          Top Deals on Fashion
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>
      <ProductsCarousel data={FashionCarousalData1()} />

      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          textAlign={"left"}
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="22px"
          fontWeight="500"
          lineHeight="25px"
          color="#212121"
          ml="15px"
        >
          Best Fashion Brand For You!
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>
      <ProductsCarousel data={FashionCarousalData2()} />

      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          textAlign={"left"}
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="22px"
          fontWeight="500"
          lineHeight="25px"
          color="#212121"
          ml="15px"
        >
          Fashion Best Sellers
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>

      <ProductsCarousel data={FashionCarousalData3()} />
    </Box>
  );
};
