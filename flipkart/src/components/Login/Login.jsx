import React, { useState } from "react";
import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  InputRightElement,
  InputGroup,
  Center,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Link as RouteLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ForgotPassword from "./ForgotPassword";

const Login = ({ page, setPage, onClose }) => {
  const [load, setLoad] = useState(false);

  const toast = useToast();
  const [forgotPage, setForgotPage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const { dispatch } = useContext(AuthContext);

  const handleLogin = async () => {
    dispatch({ type: "LOGIN_START" });
    setLoad(true);
    try {
      await signInWithEmailAndPassword(auth, email, pwd).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          setLoad(false);
          toast({
            position: "top",
            title: "Login Successful.",
            description: "Congratulation you've successfully Loged in.",
            status: "success",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => onClose(),
          });

          // console.log(user)
        }
      );
    } catch (e) {
      console.log(e.code);
      setLoad(false);
      dispatch({ type: "LOGIN_FAILURE" });
      if (e.code === "auth/wrong-password") {
        toast({
          position: "top",
          title: "Wrong Password",
          description:
            "Incorrect Password. Please try again or click on Forgot Password to reset it",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (e.code === "auth/user-not-found") {
        toast({
          position: "top",
          title: "Wrong Email",
          description:
            "Sorry, we couldn't find an account associated with that email.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (e.code === "auth/invalid-email") {
        toast({
          position: "top",
          title: "Invalid Email",
          description: "Invalid email format. Please check and try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Something Went Wrong",
          description: "Please fill in your email and password correctly.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      // console.log(e.message)
    }
  };
  // console.log(error)

  const signInWithGoogle = (e) => {
    setLoad(true);
    dispatch({ type: "LOGIN_START" });
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result)
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        setLoad(false);
        toast({
          position: "top",
          title: "Login Successful.",
          description: "Congratulation you've successfully Loged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
          onCloseComplete: () => onClose(),
        });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
        setLoad(false);
      });
  };

  return forgotPage ? (
    <ForgotPassword setForgotPage={setForgotPage} />
  ) : (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container" >
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>Login</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Get access to your Orders, WishList and Recommendations
              </Text>
            </Box>
            <Box display="grid" alignItems={"end"}>
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></Image>
            </Box>
          </Box>

          {/* right side */}
          <Box className="right_col">
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="space-between"
              gap="20px"
              p={"20px 40px"}
            >
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box
                  mt="10px"
                  color={"blue.500"}
                  onClick={() => setForgotPage(true)}
                  cursor="pointer"
                >
                  <Text _hover={{textDecoration:"underline"}}>Forgot your Password?</Text>
                </Box>
              </FormControl>
              <Stack spacing={6}>
                <Box>
                  <Button
                    w={"100%"}
                    onClick={handleLogin}
                    isLoading={load}
                    loadingText="Logging in..."
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
              <Center>or</Center>
              <Center>
                <Button
                  w={"full"}
                  maxW={"md"}
                  isLoading={load}
                  loadingText="Signing in with Google..."
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  onClick={signInWithGoogle}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
              <Box
                mt={"60px"}
                color={"blue.500"}
                display={["grid","grid",'flex']}
                gap={1}
                justifyContent="center"
              >
                <Text color={'black'}>New to VIP Mart?</Text>
                <RouteLink to={"#"}>
                  <Text onClick={() => setPage(true)} _hover={{textDecoration:"underline"}}>Create an account</Text>
                </RouteLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default Login;
