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
} from "@chakra-ui/react";
import "./Login.css";
import { Link as RouteLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = ({page,setPage}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState('');
  const [pwd,setPwd]=useState('');

  const handleLogin=()=>{
    
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container">
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
            <Box display={'flex'} flexDirection='column' justifyContent='space-between' gap="20px" p={"20px 40px"}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={pwd} onChange={(e)=>setPwd(e.target.value)}
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
          </FormControl>
          <Stack spacing={6}>
            <Box>
              <Button w={"100%"} onClick={handleLogin} colorScheme={"blue"} variant={"solid"}>
                Log In
              </Button>
            </Box>
          </Stack>

          <Box mt={'160px'} color={"blue.500"} display={"flex"} gap={1} justifyContent="center">
            <Text>New to VIP Mart?</Text>
            <RouteLink to={"#"}>
              <Text onClick={()=>setPage(true)}>Create an account</Text>
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
