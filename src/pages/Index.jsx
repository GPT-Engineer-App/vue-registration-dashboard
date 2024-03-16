import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  // This state would normally be managed by a global state management system and authentication service.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", address: "", profilePic: "" });

  const handleLogin = () => {
    // Placeholder function for login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Placeholder function for logout logic
    setIsLoggedIn(false);
  };

  const handleUpdateProfile = (newData) => {
    // Placeholder function for updating profile
    setUserData({ ...userData, ...newData });
  };

  if (isLoggedIn) {
    return <Dashboard userData={userData} onLogout={handleLogout} onUpdateProfile={handleUpdateProfile} />;
  } else {
    return <Auth onLogin={handleLogin} />;
  }
};

const Auth = ({ onLogin }) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Stack spacing={4} p={8} maxWidth="md" width="full">
        <Heading fontSize="2xl" textAlign="center">
          Welcome
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Stack spacing={6}>
          <Button colorScheme="blue" onClick={onLogin}>
            Login
          </Button>
          <Text align="center">Or login with</Text>
          <Flex direction="row" justify="space-between">
            <IconButton aria-label="Login with Google" icon={<FaGoogle />} />
            <IconButton aria-label="Login with LinkedIn" icon={<FaLinkedin />} />
            <IconButton aria-label="Login with GitHub" icon={<FaGithub />} />
          </Flex>
          <Link color="blue.500" href="#">
            Forgot password?
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

const Dashboard = ({ userData, onLogout, onUpdateProfile }) => {
  return (
    <Box p={8}>
      <Heading mb={4}>Dashboard</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Enter your name" value={userData.name} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Address</FormLabel>
        <Input type="text" placeholder="Enter your address" value={userData.address} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Profile Picture</FormLabel>
        <Input type="file" />
        {/* Display the profile picture if available */}
        {userData.profilePic && <Image src={userData.profilePic} alt="Profile Picture" />}
      </FormControl>
      <Button mt={8} colorScheme="blue" onClick={() => onUpdateProfile({ name: "New Name", address: "New Address" })}>
        Update Profile
      </Button>
      <Button mt={4} colorScheme="red" onClick={onLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Index;
