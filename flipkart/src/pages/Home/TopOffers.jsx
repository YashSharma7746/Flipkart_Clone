import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopOffers = () => {
  return (
    <Box>
      <Box>
        <Heading>Top Offers</Heading>
        <Button backgroundColor={"#2874F0"} colorScheme="#2874F0" color="white">VIEW ALL</Button>
      </Box>
      <Box>
        <Carousel>

        </Carousel>
      </Box>
    </Box>
  );
};

export default TopOffers;
