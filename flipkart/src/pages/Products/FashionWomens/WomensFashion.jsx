import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsDemo from "../../../components/Demo/ProductsDemo";
import { getWoMensByMinMaxPrice, getWoMensByPrice, GetWomensFashion } from "../../../redux/fashionWomens/actionFashionWomens.actions";

const WomensFashion = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const[minPrice,setMinPrice]=useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.WomensFashion);
  useEffect(() => {
    dispatch(GetWomensFashion());
  }, []);
  console.log(store, "a");
  if (store.loading) {
    return (
      <Stack>
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
      </Stack>
    );
  }
  if (store.error) {
    return (
      <Heading>Something Went Wrong... Please refresh and try again</Heading>
    );
  }
  return (
    <>
      <Heading mb="20px" fontSize={"20px"} pt="5px" pb="10px">
        Showing Results for Womens Fashion
      </Heading>
      <Box display={"flex"}>
        <Box
        mt={'60px'}
          w={{ base: "10%", "2xl": "20%" }}
          display={{ base: "grid", "2xl": "flex" }}
          gap="20px"
          justifyContent="center"
        >
          <Button
            colorScheme="blue"
            onClick={onOpen}
            ml={{ base: "30px" }}
            position={{ base: "relative", "2xl": "fixed" }}
          >
            Filter
          </Button>
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <Box w="100%" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                  <DrawerCloseButton color="white" backgroundColor={"red"} />
                  <Box
                    mt="50px"
                    w="100%"
                    p="10px"
                    mb="20px"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  >
                    <Text>Grab Best Deals</Text>
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
                          case "200": {
                            setMin(5);
                            // window.reload()
                            setMinPrice(200)
                            dispatch(getWoMensByPrice(200));
                            break;
                          }
                          case "500": {
                            setMin(10);
                            setMinPrice(500)
                            dispatch(getWoMensByPrice(500));
                            break;
                          }
                          case "700": {
                            setMin(20);
                            dispatch(getWoMensByPrice(700));
                            break;
                          }
                          case "1000": {
                            setMin(30);
                            dispatch(getWoMensByPrice(1000))
                          }
                          default: {
                            setMin(0);
                          }
                        }
                      }}
                    >
                      <option value="200">₹200</option>
                      <option value="500">₹500</option>
                      <option value="700">₹700</option>
                      <option value="1000">₹1000</option>
                    </Select>
                    <Select
                      placeholder="Max"
                      onChange={(e) => {
                        switch (e.target.value) {
                          case "700": {
                            setMax(30);
                            // window.reload()
                            dispatch(getWoMensByMinMaxPrice({min:minPrice,max:700}));
                            break;
                          }
                          case "900": {
                            setMin(40);
                            dispatch(getWoMensByMinMaxPrice({min:minPrice,max:900}));
                            break;
                          }
                          case "1000": {
                            setMin(50);
                            dispatch(getWoMensByMinMaxPrice({min:minPrice,max:1000}));
                            break;
                          }
                          case "2000": {
                            setMin(100);
                            dispatch(getWoMensByMinMaxPrice({min:minPrice,max:2000}));
                            break;
                          }
                          default: {
                            setMin(0);
                          }
                        }
                      }}
                    >
                     <option value="700">₹700</option>
                      <option value="900">₹900</option>
                      <option value="1000">₹1000</option>
                      <option value="2000">₹2000</option>
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
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}
          justifyContent="space-between"
        >
          {store &&
            store.womens &&
            store.womens.map((ele) => {
              return <ProductsDemo key={ele.title} element={ele} />;
            })}
        </Box>
      </Box>
    </>
  );
};

export default WomensFashion;
