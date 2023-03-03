import React from 'react'
import { Text, Box,Button } from "@chakra-ui/react";
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import { TopCarousalData1, TopCarousalData2, TopCarousalData3, TopCarousalData4 } from './Top.Carousel.data';
export const Top = () => {
  return (
    <Box w="100%" p="10px" bg="#f1f3f6">
 <Text
        textAlign={"left"}
        mt="5px"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="18px"
        fontWeight="500"
        lineHeight="25px"
        color="#212121"
      >
      Big Saving Days
      </Text>

      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        bg="white"
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
     Electronics Gadgets
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>

<ProductsCarousel data={TopCarousalData1()} />

<Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        bg="white"
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
     TVs & Appliances
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>

      <ProductsCarousel data={TopCarousalData2()} />
      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        bg="white"
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

      <ProductsCarousel data={TopCarousalData3()} />

      <Box
        padding={"10px"}
        w="100%"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        bg="white"
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
   Flipkart Originals
        </Text>
        <Button
          bg={"#2874f5"}
          color="white"
          _hover={{ borderRadius: "20PX", bg: "#2874f5" }}
        >
          VIEW ALL
        </Button>
      </Box>


      <ProductsCarousel data={TopCarousalData4()} />








    </Box>
  )
}
