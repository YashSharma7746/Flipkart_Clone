import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
export const MobilesTablets = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#f1f3f6" w="100%" p="10px">
      <Text
        textAlign={"left"}
        mt="5px"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="18px"
        fontWeight="500"
        lineHeight="25px"
        color="#212121"
      >
        Mobile Phones Big Saving Days Jan 2023
      </Text>
      <Image
        display={"block"}
        m="auto"
        mt="20px"
        w="100%"
        src="https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/b8c0b6bc805510d2.jpg?q=80"
      />
      <ImageSlider />
      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/cd36c81ed70f9f5e.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
        cursor="pointer"
        onClick={() => {
          navigate("/poco");
        }}
      />

      <Box
        w="100%"
        gap="10px"
        display="grid"
        gridTemplateColumns={"repeat(3,1fr)"}
      >
        <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/2d7da532b11fe51b.jpg?q=50" />

        <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/8a1df44e0caaabef.jpg?q=50" />
        <Image src=" https://rukminim1.flixcart.com/fk-p-flap/480/480/image/72ac71030b373c59.jpg?q=50" />
      </Box>

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/d8a1cb08e26ef62a.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />

      <Box w="100%" display="grid" gridTemplateColumns="repeat(1,1fr)">
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/0746d4c41a975b13.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/0746d4c41a975b13.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/789f242a7ace53e3.jpg?q=50" />
        </Box>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/85c0479bb9b64b8b.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/5bdc08216c4efc54.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/cd28950fd23d94be.jpg?q=50" />
        </Box>
      </Box>

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/9e6d09a2d99f4fd8.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/770751e26c78bb33.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />

      <Box w="100%" display="grid" gridTemplateColumns="repeat(1,1fr)">
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/5c22017b0e1f6dd4.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/707d7da5665fd5a6.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/f9a437e85853c435.jpg?q=50" />
        </Box>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/e50af99d9ce78874.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/80bcc62461f6ffc1.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/3277f0ad214ee071.jpg?q=50" />
        </Box>
      </Box>

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/50e535f39c27f3c8.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />

      <Box w="100%" display="grid" gridTemplateColumns="repeat(1,1fr)">
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/62a665c6c9d0b11d.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/434828593659b0cd.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/2643fe0286caef34.jpg?q=50" />
        </Box>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/c1faf46644ff2f67.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/e5a1f501c44add68.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/8c9db4e7d44e0d33.jpg?q=50" />
        </Box>
      </Box>

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/670a8467b3709c73.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />

      <Box w="100%" display="grid" gridTemplateColumns="repeat(1,1fr)">
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/4f8405e32a155959.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/18b220976227ad89.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/be58c2fabbee7f1c.jpg?q=50" />
        </Box>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="10px"
        >
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/0b14524cf5d6a5aa.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/d080e141221db1a9.jpg?q=50" />
          <Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/2a6833461b7ad129.jpg?q=50" />
        </Box>
      </Box>

      <Image
        src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/d72defba83c339d0.jpg?q=50"
        display={"block"}
        m="auto"
        w="100%"
      />
    </Box>
  );
};
