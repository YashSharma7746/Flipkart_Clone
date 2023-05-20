import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box mt={'100px'} backgroundColor={"#172337"} w="100%" display={{base:"grid",xl:"inherit","2xl":"inherit"}}>
      <Box w="80%" m="auto" pt="40px" ml="65px">
        <Box display={{base:"grid",md:"flex",xl:"flex","2xl":"flex"}}>
          <Box textAlign={"left"} flex="1">
            <Box color="#878787" fontSize={"12px"} fontWeight="400" mb="9px">
              ABOUT
            </Box>
            <Box
              fontWeight={"400"}
              color="white"
              fontSize={"12px"}
              lineHeight="2"
            >
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Contact Us
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                About Us
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Careers
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Flipkart Stories
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Press
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Flipkart Wholesale
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Corporate Information
              </Text>
            </Box>
          </Box>
          <Box textAlign={"left"} flex="1">
            <Box color="#878787" fontSize={"12px"} fontWeight="400" mb="9px">
              HELP
            </Box>
            <Box
              fontWeight={"400"}
              color="white"
              fontSize={"12px"}
              lineHeight="2"
            >
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Payments
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Shipping
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Cancellation & Returns
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                FAQ
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Report Infringement
              </Text>
            </Box>
          </Box>
          <Box textAlign={"left"} flex="1">
            <Box color="#878787" fontSize={"12px"} fontWeight="400" mb="9px">
              POLICY
            </Box>
            <Box
              fontWeight={"400"}
              color="white"
              fontSize={"12px"}
              lineHeight="2"
            >
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Return Policy
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Terms Of Use
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Security
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Privacy
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Sitemap
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                EPR Compliance
              </Text>
            </Box>
          </Box>
          <Box textAlign={"left"} flex="1">
            <Box color="#878787" fontSize={"12px"} fontWeight="400" mb="9px">
              SOCIAL
            </Box>
            <Box
              fontWeight={"400"}
              color="white"
              fontSize={"12px"}
              lineHeight="2"
            >
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Facebook
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Twitter
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                YouTube
              </Text>
            </Box>
          </Box>
          <Box textAlign={"left"} mr='10px' flex="1">
            <Box borderLeft={"1px solid #454d5e"} >
              <Box color="#878787" fontSize={"12px"}  fontWeight="400" mb="9px">
                Mail Us:
              </Box>
              <Box
                fontWeight={"400"}
                color="white"
                fontSize={"12px"}
                lineHeight="1.5"
                
              >
                <Text>Flipkart Interet Private Limited,</Text>
                <Text>Buildings Alyssa, Begonia & </Text>
                <Text>Clove Embassy Tech Village,</Text>
                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                <Text>Bengaluru, 560103,</Text>
                <Text>Karnataka, India</Text>
              </Box>
            </Box>
          </Box>
          <Box textAlign={"left"} flex="1">
            <Box color="#878787" fontSize={"12px"} fontWeight="400" mb="9px">
              Registered Office Address:
            </Box>
            <Box
              fontWeight={"400"}
              color="white"
              fontSize={"12px"}
              lineHeight="1.5"
            >
              <Text>Flipkart Interet Private Limited,</Text>
              <Text>Buildings Alyssa, Begonia & </Text>
              <Text>Clove Embassy Tech Village,</Text>
              <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
              <Text>Bengaluru, 560103,</Text>
              <Text>Karnataka, India</Text>
              <Text>CIN: U51109KA2012PTC066107</Text>
              <Text>
                Telephone :{" "}
                <span
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  044-45614700
                </span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="100%">
        <Box
          display={{base:"grid",xl:"flex","2xl":"flex"}}
          borderTop="1px solid #454d5e"
          p="25px 0"
          mt="40px"
          justifyContent={"space-evenly"}
          alignItems="center"
          textAlign={"left"}
        >
          <Box display={"flex"} gap="5px">
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" />
            <Text color="white" cursor={"pointer"}>
              Become a Seller
            </Text>
          </Box>
          <Box display={"flex"} gap="5px">
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
            <Text color="white" cursor={"pointer"}>
              Advertise
            </Text>
          </Box>
          <Box display={"flex"} gap="5px">
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
            <Text color={"white"} cursor="pointer">
              Gift Cards
            </Text>
          </Box>
          <Box display={"flex"} gap="5px">
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
            <Text color={"white"} cursor="pointer">
              Help Center
            </Text>
          </Box>
          <Box>
            <Text color="white">© 2007-2023 Flipkart.com</Text>
          </Box>
          <Box >
            <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
