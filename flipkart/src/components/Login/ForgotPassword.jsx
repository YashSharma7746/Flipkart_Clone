import React, { useState } from "react";
import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  Input,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import "./Login.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const ForgotPassword = ({ page, setPage, onClose,setForgotPage }) => {
  const toast = useToast();

  const [email, setEmail] = useState("");

  const auth = getAuth();
  const handleForgotPass = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast({
            position:'top',
            title: 'Password Reset Successful',
            description: "Password reset link sent! Please check your email for further instructions.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        console.log("succes")
      })
      .catch((e) => {
        if(e.code==="auth/user-not-found"){
            toast({
              position:'top',
              title: 'Wrong Email',
              description: "Sorry, we couldn't find an account associated with that email.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
          else if(e.code==="auth/invalid-email"){
            toast({
              position:'top',
              title: 'Invalid Email',
              description: "Invalid email format. Please check and try again.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
          else {
            toast({
              position:'top',
              title: 'Something Went Wrong',
              description: "Please fill in your email correctly.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
      });
  };
  // console.log(error)

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container">
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>Reset your Password</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Unlock your account with a new password
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
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                Forgot your password?
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color={useColorModeValue("gray.800", "gray.400")}
              >
                You&apos;ll get an email with a reset link
              </Text>
              <FormControl id="email">
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleForgotPass}
                >
                  Request Reset
                </Button>
              </Stack>
              <Box color={"blue.500"} display={"flex"} gap={1} justifyContent="center" cursor={'pointer'}>
        
              <Text onClick={()=>setForgotPage(false)} _hover={{textDecoration:"underline"}}>Click here to login</Text>

          </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default ForgotPassword;
