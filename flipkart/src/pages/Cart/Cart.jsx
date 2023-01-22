import {
  Box,
  Button,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AiTwotoneRest } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { getCartItem, removeToCart } from "../../redux/Cart/cart.actions";

const Cart = () => {
  const { currentuser } = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItem());
  }, []);
  const cart = useSelector((store) => store.CartManager.cart);
  console.log(cart);
  return (
    <Box w="70%" m="auto" mt="50px" backgroundColor={"white"}>
      <Tabs>
        <TabList display={"flex"} justifyContent="space-between" p="10px 50px">
          <Tab w="30%">Flipkart</Tab>
          <Tab w="30%">Grocery</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {!currentuser ? (
              <Box>
                <Box
                  display="block"
                  alignItems={"center"}
                  pt="70px"
                  pb="50px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Image
                    mr="auto"
                    ml="auto"
                    w="20%"
                    src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  />
                  <Box>
                    <Text>Missing Cart Items?</Text>
                    <Text fontSize={"10px"}>
                      Login to see the items you added previously
                    </Text>
                    <Button
                      color="white"
                      mt="15px"
                      colorScheme={"#fb641b"}
                      backgroundColor="#fb641b"
                      w="20%"
                      borderRadius={"0px"}
                    >
                      Log In
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : !cart ? (
              <Box>
                <Box
                  display="block"
                  alignItems={"center"}
                  pt="70px"
                  pb="50px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Image
                    mr="auto"
                    ml="auto"
                    w="20%"
                    src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  />
                  <Box>
                    <Text>Your Cart is Empty!</Text>
                    <Text fontSize={"10px"}>Add items to it now.</Text>
                    <Button
                      color="white"
                      mt="15px"
                      colorScheme={"#2874F0"}
                      backgroundColor="#2874F0"
                      w="20%"
                      borderRadius={"0px"}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                {cart.map((el) => {
                  return (
                    <Box
                      display={{ base: "grid", "2xl": "flex" }}
                      p={{ base: "none", "2xl": "10px" }}
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      borderRadius={"20px"}
                      mb="20px"
                      textAlign={{ base: "center", "2xl": "right" }}
                    >
                      <Box
                        w={{ base: "100%", sm: "70%", md: "75%", "2xl": "30%" }}
                        display={"flex"}
                        flexDirection="column"
                        justifyContent={"center"}
                        gap="15px"
                        p="10px"
                        alignItems="center"
                      >
                        <Image
                          h={{ base: "100px", "2xl": "200px" }}
                          borderRadius={"15px"}
                          p="10px"
                          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                          src={el.img}
                          ml="auto"
                          mr="auto"
                        />
                        <Box textAlign="center">
                          <Button
                            backgroundColor={"#ffdf00"}
                            colorScheme="#ffdf00"
                            color="black"
                            fontSize="20px"
                            fontWeight={"bold"}
                            mr={{ base: "none", "2xl": "20px" }}
                            mt={{ base: "none", "2xl": "15px" }}
                            disabled={el.qnty === 1}
                            size={{ base: "sm", "2xl": "md" }}
                          >
                            -
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "md" }}
                            disabled
                            mt={{ base: "none", "2xl": "15px" }}
                            mr={{ base: "none", "2xl": "20px" }}
                          >
                            {el.qnty}
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "md" }}
                            backgroundColor={"#ffdf00"}
                            colorScheme="#ffdf00"
                            color="black"
                            fontSize="20px"
                            fontWeight={"bold"}
                            disabled={el.qnty === 5}
                            mt={{ base: "none", "2xl": "15px" }}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                      <Box w={{ base: "100%", "2xl": "70%" }} p="15px">
                        <Box w="100%">
                          <Heading fontSize={{ base: "14px", "2xl": "30px" }}>
                            {el.title}
                          </Heading>
                          <Text
                            fontWeight={"bold"}
                            fontSize={{ base: "10px", "2xl": "18px" }}
                            mt="20px"
                            mb="20px"
                          >
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: "10px",
                                fontWeight: "lighter",
                                marginRight: "20px",
                              }}
                            >
                              {el.sells_price}
                            </span>
                            {el.price}
                            <span
                              style={{
                                color: "green",
                                fontSize: "10px",
                                marginLeft: "20px",
                              }}
                            >
                              {el.discount}
                            </span>
                          </Text>
                        </Box>
                        <Box
                          display={{ "2xl": "flex" }}
                          justifyContent={"right"}
                          mt="40px"
                          gap="15px"
                        >
                          <Button
                            size={{ base: "sm", "2xl": "lg" }}
                            backgroundColor={"#2874f0"}
                            colorScheme="#2874f0"
                            color="white"
                          >
                            SAVE FOR LATER
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "lg" }}
                            onClick={() => dispatch(removeToCart(el.id))}
                            backgroundColor="#f82731"
                            color="white"
                            mt={{ base: "10px", "2xl": "0px" }}
                            colorScheme={"#f82731"}
                          >
                            {" "}
                            <AiTwotoneRest />
                            REMOVE
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
                <Button
                  color="white"
                  backgroundColor={"#fb641b"}
                  colorScheme="#fb641b"
                >
                  PLACE ORDER
                </Button>
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {!currentuser ? (
              <Box>
                <Box
                  display="block"
                  alignItems={"center"}
                  pt="70px"
                  pb="50px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Image
                    mr="auto"
                    ml="auto"
                    w="20%"
                    src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/08dddd59-c0ff-4efd-8723-6d847f5df25f.png?q=90"
                  />
                  <Box>
                    <Text mt="10px" mb="15px">
                      Your basket is empty!
                    </Text>
                    <Text fontSize={"10px"}>
                      Enjoy Upto 50% Savings on Grocery
                    </Text>
                    <Button
                      color="white"
                      mt="15px"
                      colorScheme={"#2874F0"}
                      backgroundColor="#2874F0"
                      w="20%"
                      borderRadius={"0px"}
                    >
                      Shop now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : !cart ? (
              <Box>
                <Box
                  display="block"
                  alignItems={"center"}
                  pt="70px"
                  pb="50px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Image
                    mr="auto"
                    ml="auto"
                    w="20%"
                    src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  />
                  <Box>
                    <Text>Your Cart is Empty!</Text>
                    <Text fontSize={"10px"}>Add items to it now.</Text>
                    <Button
                      color="white"
                      mt="15px"
                      colorScheme={"#2874F0"}
                      backgroundColor="#2874F0"
                      w="20%"
                      borderRadius={"0px"}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                {cart.map((el) => {
                  return (
                    <Box
                      display={{ base: "grid", "2xl": "flex" }}
                      p={{ base: "none", "2xl": "10px" }}
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      borderRadius={"20px"}
                      mb="20px"
                      textAlign={{ base: "center", "2xl": "right" }}
                    >
                      <Box
                        w={{ base: "100%", sm: "70%", md: "75%", "2xl": "30%" }}
                        display={"flex"}
                        flexDirection="column"
                        justifyContent={"center"}
                        gap="15px"
                        p="10px"
                        alignItems="center"
                      >
                        <Image
                          h={{ base: "100px", "2xl": "200px" }}
                          borderRadius={"15px"}
                          p="10px"
                          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                          src={el.img}
                          ml="auto"
                          mr="auto"
                        />
                        <Box textAlign="center">
                          <Button
                            backgroundColor={"#ffdf00"}
                            colorScheme="#ffdf00"
                            color="black"
                            fontSize="20px"
                            fontWeight={"bold"}
                            mr={{ base: "none", "2xl": "20px" }}
                            mt={{ base: "none", "2xl": "15px" }}
                            disabled={el.qnty === 1}
                            size={{ base: "sm", "2xl": "md" }}
                          >
                            -
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "md" }}
                            disabled
                            mt={{ base: "none", "2xl": "15px" }}
                            mr={{ base: "none", "2xl": "20px" }}
                          >
                            {el.qnty}
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "md" }}
                            backgroundColor={"#ffdf00"}
                            colorScheme="#ffdf00"
                            color="black"
                            fontSize="20px"
                            fontWeight={"bold"}
                            disabled={el.qnty === 5}
                            mt={{ base: "none", "2xl": "15px" }}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                      <Box w={{ base: "100%", "2xl": "70%" }} p="15px">
                        <Box w="100%">
                          <Heading fontSize={{ base: "14px", "2xl": "30px" }}>
                            {el.title}
                          </Heading>
                          <Text
                            fontWeight={"bold"}
                            fontSize={{ base: "10px", "2xl": "18px" }}
                            mt="20px"
                            mb="20px"
                          >
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: "10px",
                                fontWeight: "lighter",
                                marginRight: "20px",
                              }}
                            >
                              {el.sells_price}
                            </span>
                            {el.price}
                            <span
                              style={{
                                color: "green",
                                fontSize: "10px",
                                marginLeft: "20px",
                              }}
                            >
                              {el.discount}
                            </span>
                          </Text>
                        </Box>
                        <Box
                          display={{ "2xl": "flex" }}
                          justifyContent={"right"}
                          mt="40px"
                          gap="15px"
                        >
                          <Button
                            size={{ base: "sm", "2xl": "lg" }}
                            backgroundColor={"#2874f0"}
                            colorScheme="#2874f0"
                            color="white"
                          >
                            SAVE FOR LATER
                          </Button>
                          <Button
                            size={{ base: "sm", "2xl": "lg" }}
                            onClick={() => dispatch(removeToCart(el.id))}
                            backgroundColor="#f82731"
                            color="white"
                            mt={{ base: "10px", "2xl": "0px" }}
                            colorScheme={"#f82731"}
                          >
                            {" "}
                            <AiTwotoneRest />
                            REMOVE
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
                <Button
                  color="white"
                  backgroundColor={"#fb641b"}
                  colorScheme="#fb641b"
                >
                  PLACE ORDER
                </Button>
              </Box>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box h="100px"></Box>
    </Box>
  );
};

export default Cart;
