import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function EditProfile({ setIsProfile }) {
  const [data, setData] = useState({
    username: "",
    newEmail: "",
    oldPassword: "",
  });
  const [img,setImg]=useState(null)
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

//   const handleUpdate=(e)=>{

//     if(img){
//         const storageRef = ref(storage, "usersImages/"+);

//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on( 
//           (error) => {}, 
//           () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//               console.log('File available at', downloadURL);
//             });
//           }
//         );
//     }else{

//     }
//   }
//   console.log(data)
  return (
    <>
      <FormControl id="userName">
        <FormLabel>User Profile</FormLabel>
        <Stack direction={["column", "row"]} spacing={6}>
          <Center>
            {currentUser.photoURL ? (
              <Avatar
                size={"xl"}
                name={currentUser.displayName}
                src={currentUser.photoURL}
              />
            ) : (
              <Avatar
                size={"xl"}
                name={currentUser.displayName}
                src={img
                    ?URL.createObjectURL(img)
                    :"https://bit.ly/tioluwani-kolawole"}
              />
            )}
          </Center>
          <Center w="full">
            <Button as={'label'} htmlFor="file" w="full">Change Profile</Button>
            <Input type={'file'} id='file' display={'none'} onChange={(e)=>setImg(e.target.files[0])}></Input>
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl mt={"20px"} id="userName">
        <FormLabel>User name</FormLabel>
        <Input
          name="username"
          placeholder={currentUser.displayName}
          _placeholder={{ color: "gray.500" }}
          type="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          name="newEmail"
          placeholder={currentUser.email}
          _placeholder={{ color: "gray.500" }}
          type="email"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          name="oldPassword"
          placeholder="password"
          _placeholder={{ color: "gray.500" }}
          type="password"
          onChange={handleChange}
        />
      </FormControl>
      <Stack mt={"30px"} spacing={6} direction={["column", "row"]}>
        <Button
          bg={"red.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "red.500",
          }}
          onClick={() => setIsProfile(true)}
        >
          Cancel
        </Button>
        <Button
          bg={"blue.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "blue.500",
          }}
        //   onClick={handleUpdate}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}
