import {
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Image,

  } from '@chakra-ui/react'
import { useState } from 'react';
import CurrentProfile from './CurrentProfile';
import EditProfile from './EditProfile';



function Profile({closeDrawer,openModal}) {
    const [isProfile,setIsProfile]=useState(true)
  
    return (
      <>
          <DrawerContent  >
            <DrawerCloseButton />
            <DrawerHeader>{isProfile?"My Profile":"Profile Edit"}</DrawerHeader>
  
            <DrawerBody>
                {isProfile?<CurrentProfile setIsProfile={setIsProfile}/>:<EditProfile closeDrawer={closeDrawer} openModal={openModal} setIsProfile={setIsProfile}/>} 
            </DrawerBody>
  
            <DrawerFooter display={'flex'} justifyContent='center'>
            <Box >
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></Image>
            </Box>
            </DrawerFooter>
          </DrawerContent>
      </>
    )
  }

  export default Profile;