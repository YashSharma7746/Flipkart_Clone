import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";
import { AiTwotoneIdcard } from "react-icons/ai";
import {
  BsBoxArrowInDown,
  BsHeartFill,
} from "react-icons/bs";
import {
  MdAccountBalanceWallet,
  MdShowChart,
} from "react-icons/md";
import { ImFolderUpload } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { RiQuestionnaireFill, RiLogoutBoxRLine } from "react-icons/ri";
import data from "./searchData.json";
import "./Navbar.css";
// colorScheme
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
  Modal,
  Divider,
  Drawer,
  Wrap,
  WrapItem,
  Avatar,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import vipmart_logo from "./vipmart.png";
import Login from "../Login/Login";
import Reg from "../Registration/Reg";
import Profile from "../MyProfile/Profile";
import { AuthContext } from "../../context/AuthContext";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";


const Navbar = () => {
  //cart icon
  const cartItems = useSelector((store) => store.CartManager.cart);
  console.log(cartItems);

  // current user data
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const [page, setPage] = useState(false);

  // manage drawer and modal useDisclosure
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openDrawer = () => setDrawerIsOpen(true);
  const closeDrawer = () => setDrawerIsOpen(false);

  const [text, setText] = useState("");

  const onSearch = (searchTerm) => {
    setText(searchTerm);
    // api to fetch the search result
    console.log("search ", searchTerm);
  };

  // profile drawer
  const btnRef = useRef();

  // dispatch
  const { dispatch } = useContext(AuthContext);

  // handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    openModal();
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
      position="fixed"
      zIndex={"9"}
    >
      {/* web site's logo */}
      <Link to={'/'}>
      <Box display={"flex"} alignItems="center" h="40px">
        <Image src={vipmart_logo} h="100%"></Image>
      </Box>
      </Link>

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
              <Box
                key={item.title}
                _hover={{ bgColor: "#ECEFF1" }}
                borderRadius="5px"
              >
                <Box
                  onClick={() => onSearch(item.title)}
                  className="dropdown-row"
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
            {currentUser ? (
              <Wrap>
                <WrapItem display={"flex"} alignItems="center" gap={"10px"}>
                  {currentUser.photoURL ? (
                    <Avatar
                      name={currentUser.displayName}
                      src={currentUser.photoURL}
                    />
                  ) : (
                    <Avatar
                      name={currentUser.displayName}
                      src="https://bit.ly/tioluwani-kolawole"
                    />
                  )}
                </WrapItem>
              </Wrap>
            ) : (
              <Button
                bgColor="white"
                color="#4e8cf3"
                variant="outline"
                onClick={openModal}
                fontWeight="bold"
              >
                Login
              </Button>
            )}
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />

              <PopoverHeader
                display={currentUser ? "none" : "flex"}
                justifyContent="space-between"
              >
                <Text fontWeight={500}>New Customer?</Text>
                <Text
                  color="#4e8cf3"
                  onClick={openModal}
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
                ref={btnRef}
                onClick={currentUser ? openDrawer : openModal}
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
              <Divider />
              <PopoverBody
                _hover={{ bgColor: "#E1F5FE" }}
                cursor="pointer"
                display={currentUser ? "flex" : "none"}
                alignItems="center"
                gap="10px"
                onClick={handleLogout}
              >
                <RiLogoutBoxRLine color="#4e8cf3" />
                <Text>Logout</Text>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      {/* <Box color="white" cursor={"pointer"} fontWeight="bold">
        Become a Seller
      </Box> */}

      {/* more option */}
      <Box>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              color="white"
              fontWeight="bold"
              cursor="pointer"
              display={["none", "none", "flex"]}
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
      <Link to="/cart">
      <Box
        display={["none", "none", "flex"]}
        cursor="pointer"
        alignItems={"center"}
        gap={"3px"}
        fontWeight="bold"
        color="white"
      >
        <Box
          mt={"-30px"}
          w={"17px"}
          h="17px"
          borderRadius={"50%"}
          bgColor={"red"}
          color="white"
          fontSize="sm"
          display={cartItems.length>0?"grid":'none'}
          gap="3px"
        >
          <Text fontSize={"10px"}>{cartItems.length}</Text>
          <FaShoppingCart />
        </Box>
        <Box display={cartItems.length>0?'none':'grid'}>
        <FaShoppingCart />
        </Box>
        <Text>Cart</Text>
      </Box>
      </Link>
      {/* menu */}
      <Box display={["flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="solid"
          />
          <MenuList>
            <MenuItem display={"flex"} gap="7px">
              <Box
                mt={"-25px"}
                w={"14px"}
                h="14px"
                borderRadius={"50%"}
                bgColor={"red"}
                fontSize="sm"
                display={cartItems.length>0?"grid":'none'}
                gap="1.4px"
              >
                <Text
                  color={"white"}
                  fontWeight="bold"
                  fontSize={"8px"}
                  display={'flex'}
                  alignItems='center'
                  justifyContent={'center'}
                >
                  {cartItems.length}
                </Text>
                <FaShoppingCart />
              </Box>
              <Box display={cartItems.length>0?'none':'grid'}><FaShoppingCart /></Box>
              <Text>Cart</Text>
            </MenuItem>
            <MenuItem>
              <Box>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <Text
                      // fontWeight="bold"
                      cursor="pointer"
                      display={"flex"}
                      alignItems="center"
                      gap={"5px"}
                    >
                      <BsBoxArrowInDown />
                      More
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
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>


      {/* <Link to="/cart">
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
      </Link> */}

      {/* login modal */}
      <Modal size="3xl" isOpen={modalIsOpen} onClose={closeModal}>
        {page ? (
          <Reg page={page} setPage={setPage} />
        ) : (
          <Login onClose={closeModal} page={page} setPage={setPage} />
        )}
      </Modal>

      {/* profile drawer */}
      <Drawer
        size={"sm"}
        isOpen={drawerIsOpen}
        placement="right"
        onClose={closeDrawer}
        finalFocusRef={btnRef}
      >
        <Profile
          closeDrawer={closeDrawer}
          openModal={openModal}
          onClose={closeDrawer}
        />
      </Drawer>
    </Box>
  );
};

export default Navbar;
