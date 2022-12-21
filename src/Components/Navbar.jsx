import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Checkbox,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../Context/AppContext";
import searchicon from "./searchicon.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let AdminEmail = "gyan@gadgetkart.com";
  let AdminPassword = "gyan@kart";

  const [details, setDetails] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const HandleAdmin = () => {
    if (details.email === AdminEmail && details.password === AdminPassword) {
      alert("Admin Loged In Sucessfully, Thank YOU!");
      localStorage.setItem("admin", JSON.stringify(details.email));
      navigate("/admin");
      onClose();
    } else {
      alert("Something Wrong, Try Again!");
    }
  };

  // let cat = [
  //   {
  //     id: 1,
  //     title: "MOBILES & TABLETS",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "TELEVISIONS",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "HEADPHONES & SPEAKERS",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "HOME APPLIANCES",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "COMPUTERS",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "CAMERAS",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "KITCHEN APPLIANCES",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "PERSONAL CARE",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  //   {
  //     id: 1,
  //     title: "ACCESSORIES",
  //     path: "/makeup",
  //     sub: {
  //       a: "LIPS",
  //       p1: "/",
  //       b: "FACE",
  //       p2: "/",
  //       c: "EYES",
  //       p3: "/",
  //       p4: "/",
  //       p5: "/",
  //       p6: "/",
  //       p7: "/",
  //       p8: "/",
  //     },
  //   },
  // ];

  const navigate = useNavigate();
  const { firstName, setsearch, car } = useContext(AppContext);
  const arr = [
    { a: "laptop", b: "/laptops" },
    { a: "Smartphone", b: "/smartphones" },
    { a: "smartphone", b: "/smartphones" },
    { a: "phone", b: "/smartphones" },
    { a: "watch", b: "/smartwatches" },
    { a: "tablet", b: "/tablets" },
    { a: "Laptop", b: "/laptops" },
  ];
  const [search1, setsearch1] = useState("");
  const handle = () => {
    console.log(search1);
    setsearch(search1);
    for (let i = 0; i < arr.length; ++i) {
      if (search1 === arr[i].a) navigate(arr[i].b);
    }
    navigate("/search");
  };

  return (
    <div>
      <Box>
        <Flex
          fontWeight={"bold"}
          fontSize={"14px"}
          bg={"#fe1616"}
          color="white"
        >
          <Spacer />
          <Flex width="300px" gap={"5px"}>
            <Box cursor="pointer">
              <i class="fa-solid fa-location-pin"></i> Find a store |
            </Box>
            <Box cursor="pointer">Buying guides |</Box>
            <Box cursor="pointer">Contact us</Box>
          </Flex>
        </Flex>
        <Box height={"80px"} bg={"#fe1616"} color="white">
          <br />
          <Flex>
            <Spacer />
            <Box
              marginTop={"-25px"}
              width={"250px"}
              height={"80px"}
              marginLeft="30px"
            >
              <Image
                src="/gadget_kart.png"
                alt="logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            <Input
              htmlSize={65}
              color="black"
              width="auto"
              bg={"white"}
              height={"35px"}
              borderRadius="25px"
              placeholder="Find your favorite products"
              onChange={(e) =>
                setsearch1(
                  e.target.value[0].toUpperCase() + e.target.value.substring(1)
                )
              }
            />

            <img
              src={searchicon}
              alt="none"
              style={{
                marginLeft: "-35px",
                zIndex: 2,
                height: "25px",
                cursor: "pointer",
                marginTop: "7px",
              }}
              onClick={handle}
            />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Flex
              fontWeight={"bold"}
              fontSize={"14px"}
              width="400px"
              gap={"10px"}
            >
              <Box cursor="pointer">Select your location |</Box>

              <Box
                cursor="pointer"
                display="flex"
                onClick={() => navigate("/cart")}
              >
                <i class="fa-solid fa-cart-shopping"></i>
                {car > 0 && (
                  <Box
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                    }}
                  >
                    {car > 0 ? car : ""}
                  </Box>
                )}
                Cart |
              </Box>

              <Box onClick={() => navigate("/login")} cursor="pointer">
                <i class="fa-solid fa-user"></i>{" "}
                {firstName !== "" ? firstName : "Login"}
              </Box>
              <Box onClick={onOpen} cursor="pointer">
                | Admin Login
              </Box>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Heading textDecoration={"underline"} size={"md"}>
                      Sign In{" "}
                    </Heading>{" "}
                    <Text color={"red.500"}>
                      Use Email & Password Given By Company*{" "}
                    </Text>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        mb={"15px"}
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                      />
                      handleChange <FormLabel>Password</FormLabel>
                      <Input
                        mb={"10px"}
                        type="password"
                        placeholder="Enter the Password"
                        name="password"
                        value={details.password}
                        onChange={handleChange}
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
                      <Text textAlign={"center"}>
                        Not have an Account?{" "}
                        <Link color={"#3182ce"}>Create One</Link>{" "}
                      </Text>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={HandleAdmin}
                      colorScheme="blue"
                      mr={"18"}
                      width={"90%"}
                    >
                      Sign In
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Spacer />
            </Flex>
          </Flex>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#003380",
            color: "white",
            height: "30px",
            fontSize: "12px",
          }}
        >
          <div
            className="box98"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            MOBILES & TABLETS <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"} onClick={() => navigate("/smartphone")}>
                  Smartphones
                </Heading>
                <p
                  onClick={() => {
                    setsearch("OnePlus");
                    navigate("/search");
                  }}
                >
                  OnePlus Nord 2T 5G
                </p>
                <Heading size={"sm"} onClick={() => navigate("/smartwatches")}>
                  Wearable Technology
                </Heading>
                <p>Smart Watch Accessories</p>
                <Heading size={"sm"}>Accessories</Heading>
                <p onClick={() => navigate("/tablets")}>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <p>Headphones & Headsets</p>
                <p onClick={() => navigate("/tablets")}>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box97"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            TELEVISIONS <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading
                  size={"sm"}
                  onClick={() => {
                    setsearch("Television");
                    navigate("/search");
                  }}
                >
                  Televisions
                </Heading>
                <p
                  onClick={() => {
                    setsearch("Television");
                    navigate("/search");
                  }}
                >
                  Smart TVs
                </p>
                <p>32 Inch TVs</p>
                <p>43 Inch TVs</p>
                <p>55 Inch TVs</p>
                <p>Android TVs</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Gaming</Heading>
                <p>Gaming Consoles</p>
                <p>Gaming Accessories</p>
                <p>Gaming Titles</p>
                <p>Projectors</p>
                <p>Streaming Devices</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Heading size={"sm"}>
                  Reconnect Disney | Marvel Audio Collection
                </Heading>
                <p>TV & Audio Accessories</p>
                <p>Virtual Reality Headsets</p>
                <p>Stabilizers & Surge Protectors</p>
                <p>Power Strips & Extension Cords</p>
                <p>Electronic Musical Instruments</p>
                <p>Musical Mini Keyboards</p>
                <p>Musical Standard Keyboards</p>
              </div>
            </div>
          </div>
          <div
            className="box96"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            AUDIO <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>True Wireless</p>
                <p>Bluetooth Neckbands</p>
                <p>Wired Earphones</p>
                <p>On Ear Headphones</p>
                <p>Noise Cancelling Headphones</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "30%",
                }}
              >
                <Heading size={"sm"}>Bluetooth & WiFi Speakers</Heading>
                <p>Bluetooth Speakers</p>
                <p>Smart Speakers</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>TV Speakers & Soundbars</Heading>
                <p>Soundbars</p>
                <p>Home Theatre Systems</p>
                <p>Party speakers</p>
                <p>Multimedia</p>
                <p>Audio, Speaker Stands</p>
                <p>Musical Instruments</p>
              </div>
            </div>
          </div>
          <div
            className="box95"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            HOME APPLIANCES <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Smartphones</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            COMPUTERS <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Laptop</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <Heading size={"sm"}>AI Learning Robots</Heading>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            CAMERAS <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Cameras</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            KITCHEN APPLIANCES <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Water Purifiers</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Appliances</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            PERSONAL CARE <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Hair Dryers & Trimmers</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "8px" }}
          >
            ACCESSORIES <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"}>Smartphones</Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smart Watch Accessories</p>
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "70%",
                }}
              >
                <Heading size={"sm"}>Headphones & Headsets</Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
              <div>
                <Heading size={"sm"}>AI Learning Robots</Heading>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
