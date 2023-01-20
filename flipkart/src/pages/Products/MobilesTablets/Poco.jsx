import React, { useEffect } from 'react'
import {Box,Image,Text} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux'
import { GetPoco } from '../../../redux/PocoMobileProduct/Poco.actions';
import { AiOutlineLeft } from "react-icons/ai";
export const Poco = () => {
const dispatch=useDispatch();

    useEffect(()=>{
  dispatch(GetPoco());

    },[])
    const Mobiles=useSelector((store)=>store.pocoManager.mobiles)


  return (
    <Box bg="#f1f3f6" color="#212121" w="100%" p="10px" fontFamily="Roboto, Arial, sans-serif" display="flex" justifyContent="space-between" alignItems="center">
{/* Left Box */}
     <Box w="20%" display="grid" gridTemplateColumns={"repeat(1,1fr)"}  bg="white" >
        <Box w="100%" boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
        <Image src="https://rukminim1.flixcart.com/flap/400/400/image/c3bcb6e03b8f43d4.png?q=50"/>
        <Box w="100%" p="10px" boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
        <Text >Grab Best Mobile Deals</Text>
        </Box>
        </Box>
       <Box p="20px" fontSize="18px" lineHeight="25px"  boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
       <Text    textAlign="left">Filters</Text>
       </Box>
       <Box p="20px">
       <Text  textAlign="left" fontSize="12px">CATEGORIES</Text>
       <Text color="grey" display={"flex"}><AiOutlineLeft/> Mobiles & Accessories</Text>
       </Box>
     </Box> 

     {/* Right Box */}
     <Box w="80%">

     </Box>
















    </Box>
  )
}
