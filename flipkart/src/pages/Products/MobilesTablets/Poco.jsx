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
  getPocoByMinMaxPrice,
  getPocoByPrice,
  GetPocoByRating,
} from "../../../redux/PocoMobileProduct/Poco.actions";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { addToCart } from "../../../redux/Cart/cart.actions";
export const Poco = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPoco());
    console.log(min, max);
  }, []);
  const Mobiles = useSelector((store) => store.pocoManager.mobiles);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(Mobiles);
  return (
    <Box
      bg="#f1f3f6"
      color="#212121"
      w="100%"
      p="10px"
      fontFamily="Roboto, Arial, sans-serif"
      // display="grid"
      // // justifyContent={"space-between"}
      // gridTemplateColumns={"repeat(2,1fr)"}
      // justifyContent={"space-between"}
    >
      {/* Left Box */}
      <Box
        w="20%"
        border="solid"
        display={"flex"}
        justifyContent="center"
        position="fixed"
        left="0px"
      >
        <Button colorScheme="blue" onClick={onOpen}>
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
                          setMinPrice(7000);
                          dispatch(getPocoByPrice(7000));
                          break;
                        }
                        case "8000": {
                          setMin(10);
                          setMinPrice(8000);
                          dispatch(getPocoByPrice(8000));
                          break;
                        }
                        case "9000": {
                          setMin(20);
                          setMinPrice(9000);
                          dispatch(getPocoByPrice(9000));
                          break;
                        }
                        case "10000": {
                          setMin(30);
                          setMinPrice(10000);
                          dispatch(getPocoByPrice(10000));
                          break;
                        }
                        default: {
                          setMinPrice(0);
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
                          setMaxPrice(10000);
                          dispatch(
                            getPocoByMinMaxPrice({ min: minPrice, max: 10000 })
                          );
                          break;
                        }
                        case "20000": {
                          setMax(40);
                          setMaxPrice(20000);
                          dispatch(
                            getPocoByMinMaxPrice({ min: minPrice, max: 20000 })
                          );
                          break;
                        }
                        case "30000": {
                          setMax(50);
                          setMaxPrice(30000);
                          dispatch(
                            getPocoByMinMaxPrice({ min: minPrice, max: 30000 })
                          );
                          break;
                        }
                        case "40000": {
                          setMax(100);
                          setMaxPrice(40000);
                          dispatch(
                            getPocoByMinMaxPrice({ min: minPrice, max: 40000 })
                          );
                          break;
                        }
                        default: {
                          setMaxPrice(0);
                          setMax(0);
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
                  <Checkbox
                    colorScheme="blue"
                    onChange={() => {
                      dispatch(GetPocoByRating(4));
                    }}
                  >
                    4&#9733; & above
                  </Checkbox>
                  <Checkbox
                    colorScheme="blue"
                    onChange={() => {
                      dispatch(GetPocoByRating(3));
                    }}
                  >
                    3&#9733; & above
                  </Checkbox>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Right Box */}
      <Box
        w="80%"
        display="grid"
        gridTemplateColumns={"repeat(1,1fr)"}
        border="solid"
        // left="15%"
        alignItems={"center"}
        position="absolute"
        right="0px"
        gap="10px"
      >
        {Mobiles?.map((el, i) => (
          <Box
            key={i}
            display="grid"
            gridTemplateColumns={"repeat(3,1fr)"}
            justifyContent={"space-evenly"}
            gap="10px"
          >
            <Box
              display="flex"
              justifyContent={"center"}
              border="1px solid black"
              p="20px"
            >
              <Image src={el.img} />
            </Box>
            <Box textAlign={"left"} p="20px">
              <Text>{el.title}</Text>
              <Box bg="green" color="white" w="40px" textAlign={"center"}>
                <Text>{el.ratings}&#9733;</Text>
              </Box>

              <Text>{el.discount}</Text>
              <Button
                onClick={() => {
                  dispatch(addToCart(el));
                }}
                bg="teal"
              >
                Add to Cart
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              h="20%"
              alignItems={"center"}
            >
              <Text fontSize="20px" fontWeight="bold">
                ₹{el.price}
              </Text>
              <Image
                h="40%"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
