import { SearchIcon } from "@chakra-ui/icons";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";
import { AiTwotoneIdcard } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { MdAccountBalanceWallet, MdShowChart } from "react-icons/md";
import { ImFolderUpload } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { RiQuestionnaireFill } from "react-icons/ri";
import data from "./searchData.json";
import "./Navbar.css";

import {
  Box,
  Image,
  Input,
  InputGroup,
  Popover,
  InputRightElement,
  Button,
  Portal,
  PopoverBody,
  PopoverHeader,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  Modal,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import vipmart_logo from "./vipmart.png";
import Login from "../Login/Login";
import Reg from "../Registration/Reg";

const Navbar = () => {
  const [page,setPage]=useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");

  const onSearch = (searchTerm) => {
    setText(searchTerm);
    // api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <Box
      bg="#2874f0"
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      gap="40px"
      w="100%"
      h="70px"
      p={4}
    >
      {/* web site's logo */}
      <Box display={"flex"} alignItems="center" h="40px">
        <Image src={vipmart_logo} h="100%"></Image>
      </Box>

      {/* search input box */}

      <Box w="30%">
        <InputGroup>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            bgColor="white"
            placeholder="Search for products, brands and more"
          />
          <InputRightElement
            onClick={() => onSearch(text)}
            children={<SearchIcon color="#4e8cf3" />}
          />
        </InputGroup>
        <Box className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = text.toLowerCase();
              const fullName = item.title.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <Box _hover={{ bgColor: "#ECEFF1" }} borderRadius="5px">
                <Box
                  onClick={() => onSearch(item.title)}
                  className="dropdown-row"
                  key={item.title}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                >
                  <Image src={item.img} h="20px"></Image>
                  <Box>{item.title.split(" ").slice(0, 3).join(" ")}</Box>
                </Box>
                <Divider />
              </Box>
            ))}
        </Box>
      </Box>

      {/* login button starts here */}
      <Box>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button
              bgColor="white"
              color="#4e8cf3"
              variant="outline"
              onClick={onOpen}
              fontWeight="bold"
            >
              Login
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader display="flex" justifyContent="space-between">
                <Text fontWeight={500}>New Customer?</Text>
                <Text
                  color="#4e8cf3"
                  onClick={onOpen}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  Sign Up
                </Text>
              </PopoverHeader>

              {/* <PopoverCloseButton /> */}
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <FaUserCircle color="#4e8cf3" />
                <Text>My Profile</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <TiPlusOutline color="#4e8cf3" />
                <Text>VIP Mart Plus Zone</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <ImFolderUpload color="#4e8cf3" />
                <Text>Orders</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <BsHeartFill color="#4e8cf3" />
                <Text>Wishlist</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <AiTwotoneIdcard color="#4e8cf3" />
                <Text>Rewards</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <MdAccountBalanceWallet color="#4e8cf3" />
                <Text>Gift Cards</Text>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box color="white" cursor={"pointer"} fontWeight="bold">
        Become a Seller
      </Box>

      {/* more option */}
      <Box>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              color="white"
              fontWeight="bold"
              cursor="pointer"
              display={"flex"}
              alignItems="center"
            >
              More
              <RiArrowDownSLine />
            </Text>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <GoBell color="#4e8cf3" />
                <Text>Notification Preferences</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <RiQuestionnaireFill color="#4e8cf3" />
                <Text>24x7 Customer Care</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <MdShowChart color="#4e8cf3" />
                <Text>Advertise</Text>
              </PopoverBody>
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <IoMdDownload color="#4e8cf3" />
                <Text>Download App</Text>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>

      {/* cart items */}
      <Box
        display={"flex"}
        cursor="pointer"
        alignItems="center"
        gap={"3px"}
        fontWeight="bold"
        color="white"
      >
        <FaShoppingCart />
        <Text>Cart</Text>
      </Box>

      {/* login modal */}
      <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        {page?<Reg page={page} setPage={setPage}/>:<Login page={page} setPage={setPage}/>}
      </Modal>
    </Box>
  );
};

export default Navbar;
