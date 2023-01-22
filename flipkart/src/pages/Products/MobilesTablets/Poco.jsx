import React, { useEffect } from "react";
import {
  Box,
  Image,
  Text,
  useDisclosure,
  Radio,
  RadioGroup,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPoco,
  getPocoByPrice,
  GetPocoByRating,
} from "../../../redux/PocoMobileProduct/Poco.actions";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { addToCart } from "../../../redux/Cart/cart.actions";
export const Poco = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPoco());
    console.log(min, max);
  }, []);
  const Mobiles = useSelector((store) => store.pocoManager.mobiles);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#f1f3f6"
      color="#212121"
      w="100%"
      p="10px"
      fontFamily="Roboto, Arial, sans-serif"
      display="flex"
      justifyContent={"space-between"}
    >
      {/* Left Box */}
      <Box w="20%" display={"flex"} justifyContent="center">
        <Button colorScheme="blue" onClick={onOpen} position="fixed">
          Filter
        </Button>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Box w="100%" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Image src="https://rukminim1.flixcart.com/flap/400/400/image/c3bcb6e03b8f43d4.png?q=50" />
                <Box
                  w="100%"
                  p="10px"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                >
                  <Text>Grab Best Mobile Deals</Text>
                </Box>
              </Box>
              <Box
                p="20px"
                fontSize="18px"
                lineHeight="25px"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Text textAlign="left">Filters</Text>
              </Box>
              <Box p="20px">
                <Text textAlign="left" fontSize="12px">
                  CATEGORIES
                </Text>

                <Text color="grey" display={"flex"} fontSize="12px">
                  {" "}
                  &#60; Mobiles & Accessories
                </Text>
                <Text textAlign={"left"} fontSize="14px">
                  Mobiles
                </Text>

                <RangeSlider aria-label={["min", "max"]} value={[min, max]}>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Box w="100%" display="flex" justifyContent="space-between">
                  <Select
                    placeholder="Min"
                    onChange={(e) => {
                      switch (e.target.value) {
                        case "7000": {
                          setMin(5);
                          // window.reload()
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "8000": {
                          setMin(10);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "9000": {
                          setMin(20);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "10000": {
                          setMin(30);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        default: {
                          setMin(0);
                        }
                      }
                    }}
                  >
                    <option value="7000">₹7000</option>
                    <option value="8000">₹8000</option>
                    <option value="9000">₹9000</option>
                    <option value="10000">₹10000</option>
                  </Select>
                  <Select
                    placeholder="Max"
                    onChange={(e) => {
                      switch (e.target.value) {
                        case "10000": {
                          setMax(30);
                          // window.reload()
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "20000": {
                          setMin(40);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "30000": {
                          setMin(50);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        case "40000": {
                          setMin(100);
                          dispatch(GetPocoByRating(e.target.value));
                          break;
                        }
                        default: {
                          setMin(0);
                        }
                      }
                    }}
                  >
                    <option value="10000">₹10000</option>
                    <option value="20000">₹20000</option>
                    <option value="30000">₹30000</option>
                    <option value="40000">₹40000+</option>
                  </Select>
                </Box>
                <Box>
                  <Text>Customer Rating</Text>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Right Box */}
      <Box
        w="100%"
        display="grid"
        gridTemplateColumns={"repeat(1,1fr)"}
        alignItems={"center"}
      >
        {Mobiles?.map((el, i) => (
          <Box
            key={i}
            display="flex"
            justifyContent={"space-between"}
            mt="30px"
            boxShadow={"md"}
          >
            <Box w="20%" display="flex" justifyContent={"center"} p="20px">
              <Image src={el.img} />
            </Box>
            <Box w="50%" mt="10px" textAlign={"left"}>
              <p style={{ fontWeight: "700", marginBottom: "5px" }}>
                {el.title}
              </p>
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
                  marginBottom: "10px",
                }}
              >
                {el.ratings}{" "}
                <Image
                  h="10px"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                />
              </p>
              <Box
                p="10px"
                pl="30px"
                fontSize={"13px"}
                lineHeight="2"
                mb="10px"
              >
                <ul>
                  <li>
                    <Text>{el.desc.storage}</Text>
                  </li>
                  <li>
                    <Text>{el.desc.display}</Text>
                  </li>
                  <li>
                    <Text>{el.desc.camera}</Text>
                  </li>
                  <li>
                    <Text>{el.desc.battery}</Text>
                  </li>
                  <li>
                    <Text>{el.desc.processor}</Text>
                  </li>
                  <li>
                    <Text>{el.desc.warranty}</Text>
                  </li>
                </ul>
              </Box>
              <Button
                onClick={() => {
                  dispatch(addToCart(el));
                }}
                bg="teal"
              >
                Add to Cart
              </Button>
            </Box>
            <Box w="25%" textAlign={"left"}>
              <Text fontSize={"30px"} fontWeight="500">
                ₹{el.price}
              </Text>
              <Box display={"flex"} gap="15px" fontSize={"14px"}>
                <Text
                  textDecoration={"line-through"}
                  textDecorationThickness="1px"
                  color="grey"
                >
                  ₹{el.sells_price}
                </Text>
                <Text color="green">{el.discount}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
