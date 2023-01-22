import {
    Avatar,
    Box,
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
  
  export default function CurrentProfile({setIsProfile}) {
    const { currentUser } = useContext(AuthContext);
    return (
    
        <Box>
        <Stack spacing={4}>
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
          <Text fontSize="lg" fontWeight="bold">Name: {currentUser.displayName}</Text>
          <Text>Email: {currentUser.email}</Text>
          <Button onClick={()=>setIsProfile(false)} colorScheme="cyan">Edit Profile</Button>
        </Stack>
      </Box>
 
    );
  }