import React from "react";
import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
 
} from "@chakra-ui/react";

function AdminSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  

  return (
    <div>
      <Box>
        <VStack bgColor={"#90CDF4"} width={"15%"} border={"1px solid black"}>
          <Flex
            textAlign={"center"}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-evenly"}
            border={"1px solid black"}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />{" "}
            <Heading as="h3" size="sm">
              Admin DashBoard
            </Heading>
          </Flex>
          <Box width={"100%"}>
            <Button
              width={"100%"}
              height={"50px"}
              as="h3"
              size="sm"
              onClick={onOpen}
              bgColor={"#003380"}
              color={"white"}
              borderRadius={"none"}
              _hover={{ color: "black", bgColor: "#fe1616" }}
            >
              <Heading as="h3" size="md">
                Admin Sign In
              </Heading>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Heading size={"md"}>Sign In </Heading>{" "}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter email" mb={"15px"} />
                    {/* <FormErrorMessage >Email is required.</FormErrorMessage> */}

                    <FormLabel>Password</FormLabel>
                    <Input
                      mb={"10px"}
                      type="email"
                      placeholder="Enter the Password"
                    />

                    <Flex mb={"10px"} justifyContent={"space-between"}>
                      <Checkbox defaultChecked>Remember me</Checkbox>
                      <Text
                        color={"#3182ce"}
                        _hover={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Forgot password?
                      </Text>
                    </Flex>
                    <Text textAlign={"center"}>Not have an Account? <Link color={"#3182ce"} >Create One</Link></Text>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={"18"} width={"90%"}>
                    Sign In
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          
        </VStack>
      </Box>
    </div>
  );
}
export default AdminSidebar;
