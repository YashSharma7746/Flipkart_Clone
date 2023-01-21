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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storage } from "../../firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updateProfile } from "firebase/auth";

export default function EditProfile({ setIsProfile }) {
  const [data, setData] = useState({
    username: "",
    newEmail: "",
    oldPassword: "",
  });
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);


  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (img) {
      const storageRef = ref(storage, "usersImages/" + uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      console.log(uploadTask)
      console.log(storageRef,storage)
      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL)
            await updateProfile(currentUser, {
              photoURL: downloadURL,
              displayName: data.username,
            });

            const credential = EmailAuthProvider.credential(
              currentUser.email,
              data.oldPassword
            );

            await reauthenticateWithCredential(currentUser, credential).then(
              async () => {
                // User re-authenticated.
                await updateEmail(currentUser, data.newEmail);
              }
            );
          });
        }
      );
    } else {
      await updateProfile(currentUser, {
        displayName: data.username,
      });
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        data.oldPassword
      );

      await reauthenticateWithCredential(currentUser, credential).then(
        async () => {
          // User re-authenticated.
          await updateEmail(currentUser, data.newEmail);
        }
      );
    }

    // setIsProfile(true)

  };
  // console.log(data)
  return (
    <>
      <FormControl id="userName">
        <FormLabel>User Profile</FormLabel>
        <Stack direction={["column", "row"]} spacing={6}>
          <Center>
            {currentUser.appName ? (
              <Avatar
                size={"xl"}
                name={currentUser.displayName}
                src={currentUser.appName}
              />
            ) : (
              <Avatar
                size={"xl"}
                name={currentUser.displayName}
                src={
                  img
                    ? URL.createObjectURL(img)
                    : "https://bit.ly/tioluwani-kolawole"
                }
              />
            )}
          </Center>
          <Center w="full">
            <Button as={"label"} htmlFor="file" w="full">
              Change Profile
            </Button>
            <Input
              type={"file"}
              id="file"
              display={"none"}
              onChange={(e) => setImg(e.target.files[0])}
            ></Input>
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
          onClick={handleUpdate}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}
