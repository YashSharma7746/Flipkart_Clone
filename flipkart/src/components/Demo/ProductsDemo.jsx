import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart/cart.actions";

const ProductsDemo = ({ element }) => {
  const dispatch = useDispatch();
  return (
    <Box
      textAlign={"left"}
      p="20px"
      m="0px auto"
      _hover={{ boxShadow: "lg", color: "blue" }}
      cursor="pointer"
    >
      <Box>
        <Image src={element.img} ml="auto" mr="auto" h="250px" />
      </Box>
      <Text fontSize={"14px"} p="5px" pb="7px">
        {element.title}
      </Text>
      <p
        style={{
          display: "flex",
          backgroundColor: "#388E3C",
          color: "white",
          borderRadius: "3px",
          fontWeight: "500",
          fontSize: "12px",
          textAlign: "center",
          padding: "2px 4px 2px 6px",
          width: "40px",
          alignItems: "center",
          gap: "2px",
          justifyContent: "center",
          marginBottom: "7px",
          marginLeft: "5px",
        }}
      >
        {element.rating}{" "}
        <Image
          h="10px"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
        />
      </p>
      <Box
        display={"flex"}
        alignItems="center"
        p="5px"
        gap="8px"
        fontSize={"13px"}
      >
        <Text fontSize={"15px"} color="black" fontWeight="500">
          ₹{element.price}
        </Text>
        <Text
          textDecoration={"line-through"}
          textDecorationThickness="1px"
          color="grey"
        >
          ₹{element.sells_price}
        </Text>
        <Text color="green">{element.discount}</Text>
      </Box>
      <Text color="black" fontSize={"11px"} pl="5px">
        Free Delievery
      </Text>
      <Button
        color="white"
        backgroundColor={"#2874f0"}
        colorScheme={"#2874f0"}
        mt="10px"
        onClick={() => dispatch(addToCart(element))}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductsDemo;
