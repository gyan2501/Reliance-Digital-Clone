import React,{ useState } from 'react';
// import AdminSidebar from '../components/AdminSidebar';


import {
  Avatar,
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  useDisclosure,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

function Admin(){
    const [name , setName] = useState("");
const[image, setImage] = useState("");
const [price ,setPrice] = useState("");
const [quantity , setQuantity] = useState("");
const [off, setOff] = useState("");

const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = React.useRef();
let AdminEmail = localStorage.getItem("admin");

const handleSubmit =(event) =>{
event.preventDefault();
console.log("afaf")
console.log(name , image ,price , off,quantity)
}
    return(
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
              Admin DashBoard<Text>{AdminEmail}</Text>
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
                Add Products
              </Heading>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              bgColor="#63B3ED"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>List your Product</DrawerHeader>

                <DrawerBody>
                  <FormControl onSubmit={handleSubmit} isRequired>
                    {" "}
               
                    <FormLabel>Product Image </FormLabel>
                    <Input onChange={el=>setImage(el.target.value)} name="image" type="url" value={image} mb={15} placeholder="Enter Product Image Url" />
                    
                    <FormLabel>Product Name </FormLabel>
                    <Input onChange={el=>setName(el.target.value)} name="name" type="text" value={name} mb={15} placeholder="Enter Product Name" />
                    
                    <FormLabel>Product Price </FormLabel>
                    <Input onChange={el=>setPrice(el.target.value)} name="price" type="number" value={price} mb={15} placeholder="Enter Product Price" />
                    
                    <FormLabel>Product Quantity </FormLabel>
                    <Input onChange={el=>setQuantity(el.target.value)} name="quantity" type="number" value={quantity} mb={15} placeholder="Enter Product Quantity" />
                    
                    <FormLabel>Product Off (%) </FormLabel>
                    <Input onChange={el=>setOff(el.target.value)} name="off" type="number" value={off}  placeholder="Enter Product offer In %" />
                    <Button type="submit" colorScheme="blue">Save</Button>
                    </FormControl>
                </DrawerBody>
                <Text
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  ml={25}
                  color={"#63B3ED"}
                >
                  *Terms and conditions
                </Text>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  
                </DrawerFooter>
              
              </DrawerContent>
            </Drawer>
          </Box>
        </VStack>
      </Box>
       
        </div>
        
    )
}
export default Admin;