import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Icon,
  Avatar,
  Heading,
  border,
} from "@chakra-ui/react";

import React, { useContext, useEffect, useState } from "react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Home from './Home';
// import { AppContext } from '../context/AppContext';
// import searchicon from "./searchicon.svg"

const Navbar = () => {
  let cat = [
    {
      id: 1,
      title: "MOBILES & TABLETS",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "TELEVISIONS",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "HEADPHONES & SPEAKERS",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "HOME APPLIANCES",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "COMPUTERS",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "CAMERAS",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "KITCHEN APPLIANCES",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "PERSONAL CARE",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 1,
      title: "ACCESSORIES",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
  ];

  // const navigate=useNavigate()
  // const {firstName,setsearch,car} = useContext(AppContext)
  // const arr=[{a:"laptop",b:"/laptops"},{a:"Smartphone",b:"/smartphones"},{a:"smartphone",b:"/smartphones"},{a:"phone",b:"/smartphones"},{a:"watch",b:"/smartwatches"},{a:"tablet",b:"/tablets"},{a:"Laptop",b:"/laptops"}]
  // const [search1, setsearch1] = useState("")
  // const handle=()=>{
  //     console.log(search1)
  //     setsearch(search1)
  //     for(let i=0;i<arr.length;++i)
  //     {if(search1===arr[i].a)
  //           navigate(arr[i].b)
  //     }
  //     navigate("/search")
  // }

  return (
    <div>
      <Flex bg={"#e42529"} color="white" height="40px">
        <Flex
          fontFamily={"Roboto"}
          padding={"5px 30px 0px 0px"}
          justifyContent={"flex-end"}
          fontSize={"18px"}
          gap={"8px"}
          width="4800px"
        >
          <Box cursor="pointer" fontSize="18px">
            <Heading size="md">Find a store |</Heading>
          </Box>
          <Box cursor="pointer">
            <Heading size="md">Buying guides |</Heading>{" "}
          </Box>
          <Box cursor="pointer">
            <Heading size="md">Contact Us</Heading>
          </Box>
        </Flex>
      </Flex>

      <Box bg={"#e42529"} height="100px" color="white">
        <Flex justifyContent={"space-between"}>
          <Box marginTop={"0px"} marginLeft={"58px"} border={"1px solid white"}>
            <Image
              src="file:///D:/Download/Gadget_Kart.html"
              alt="logo"
              style={{ cursor: "pointer" }}
            />
          </Box>

          <Box>
            <Flex marginTop={"25px"}>
              <Input
                color="black"
                fontSize={"18px"}
                height={"52px"}
                bg={"white"}
                borderRadius="25px"
                width={"750px"}
                marginLeft={"30px"}
                placeholder="Find your favorite products"
              />
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </Flex>
          </Box>
          <Flex
            gap={"8px"}
            textAlign={"center"}
            alignItems={"center"}
            width="450px"
          >
            <Box cursor="pointer">
              <i class="fa-solid fa-location-dot"></i>
              <Heading size="md">Select your PIN Code |</Heading>
            </Box>

            <Box cursor="pointer" display="flex">
              <i class="fa-solid fa-cart-shopping"></i>
              <Heading size="md">Cart |</Heading>
            </Box>
            <Box cursor="pointer">
              <FontAwesomeIcon icon="fa-solid fa-user" />

              <Heading size="md">Login |</Heading>
              {/*firstName!==""?firstName:"Login"*/}
            </Box>
            <Box cursor="pointer">
              <i class="fa-solid fa-user"></i>{" "}
              <Heading size="md">Admin</Heading>
              {/*firstName!==""?firstName:"Login"*/}
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#003380",
            color: "white",
            height: "50px",
            fontSize: "18px",
           
          }}
        >
          <div
            className="box98"
            style={{ cursor: "pointer", height: "100%", padding: "10px", }}
          >
            MOBILES & TABLETS
          </div>
          <div className="box99">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "50px",
                height: "80px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginRight: "18px",
                }}
              >
                <Heading as="h6" size="md">
                  Smartphones
                </Heading>
                <p>OnePlus Nord 2T 5G</p>

                <Heading as="h6" size="md">
                  Wearable Technology
                </Heading>
                <p>Top Selling Smartwatches</p>
                <p>Apple Price Drop</p>
                <Heading as="h6" size="md">
                  Accessories
                </Heading>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
                <p>Memory Cards</p>
                <p>Cables & Cords</p>
                <p>Chargers & Adapters</p>
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
                <Heading marginBottom={"16px"} as="h6" size="md">
                  Headphones & Headsets
                </Heading>
                <Heading as="h6" size="md">
                  Tablets & eReaders
                </Heading>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <Heading marginBottom={"16px"} as="h6" size="md">
                  Power Banks
                </Heading>
                <Heading as="h6" size="md">
                  eSlates
                </Heading>
              </div>
              <div>
                <Heading as="h6" size="md">
                  AI Learning Robots
                </Heading>
              </div>
            </div>
          </div>
          <div
            className="box97"
            style={{ cursor: "pointer", height: "100%", padding: "10px",  }}
          >
            TELEVISIONS
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
                <Heading as="h6" size="md">
                  Televisions
                </Heading>
                <p>Smart TVs</p>
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
                <Heading as="h6" size="md">
                  Gaming
                </Heading>
                <p>Gaming Consoles</p>
                <p>Gaming Accessories</p>
                <p>Gaming Titles</p>
                <Heading as="h6" size="md">
                  Projectors
                </Heading>
                <Heading as="h6" size="md">
                  Streaming Devices
                </Heading>
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
                <Heading marginBottom={"10px"} as="h6" size="md">
                  Reconnect Disney | Marvel Audio Collection
                </Heading>
                <Heading as="h6" size="md">
                  TV & Audio Accessories
                </Heading>
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
            style={{ cursor: "pointer", height: "100%", padding: "10px",  }}
          >
            AUDIO
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
                <Heading as="h6" size="md">
                  Headphones & Headsets
                </Heading>
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
                <Heading as="h6" size="md">
                  Bluetooth & WiFi Speakers
                </Heading>
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
                <Heading as="h6" size="md">
                  TV Speakers & Soundbars
                </Heading>
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
            style={{ cursor: "pointer", height: "100%", padding: "10px",  }}
          >
            HOME APPLIANCES
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
                <Heading as="h6" size="md">
                  Air Conditioners
                </Heading>
                <p>Split Air Conditioners</p>
                <p>Window Air Conditioners</p>
                <p>Smart Air Conditioners</p>
                <p>5 Star Air Conditioners</p>
                <p>Tablet Accessories</p>
                <p>Mobile Accessories</p>
                <Heading as="h6" size="md">
                  Air Coolers
                </Heading>
                <Heading as="h6" size="md">
                  Air Purifiers
                </Heading>
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
                <Heading as="h6" size="md">
                  Washing Machine
                </Heading>
                <p>Fully Automatic Front Load</p>
                <p>Fully Automatic Top Load</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Semi Automatic Top Load</p>
                <Heading as="h6" size="md">
                  Refrigerators
                </Heading>
                <p>Single Door</p>
                <p>Double Door</p>
                <p>Convertible</p>
              </div>
              <div textAlign={"justify"}>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"0px"}
                  as="h6"
                  size="md"
                >
                  Vaccum Cleaners
                </Heading>
                <p>Robotic Vacuum Cleaners</p>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"12px"}
                  as="h6"
                  size="md"
                >
                  Dishwashers
                </Heading>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"12px"}
                  as="h6"
                  size="md"
                >
                  Fans
                </Heading>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"12px"}
                  as="h6"
                  size="md"
                >
                  Cloth Dryers
                </Heading>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"12px"}
                  as="h6"
                  size="md"
                >
                  Geysers
                </Heading>
                <Heading
                  textAlign={"justify"}
                  marginBottom={"12px"}
                  as="h6"
                  size="md"
                >
                  Room Heaters
                </Heading>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "10px",  }}
          >
            COMPUTERS
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
                <Heading as="h6" size="md">
                  Laptops
                </Heading>
                <p>Basic Use Laptops</p>
                <p>Student Laptops</p>
                <p>Thin and Light Laptoos</p>
                <p>Multi-Tasking Laptops</p>
                <p>Gaming Laptos</p>
                <p>Mobile Accessories</p>
                <Heading as="h6" size="md">
                  Computer Monitors
                </Heading>
                <Heading as="h6" size="md">
                  Desktop All-In-One
                </Heading>
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
                <Heading as="h6" size="md">
                  Bluetooth & WiFi Speakers
                </Heading>
                <Heading as="h6" size="md">
                  Internet Connectivity Devices
                </Heading>
                <p>Routers</p>
                <p>Usb Adapter & Usb</p>
                <Heading as="h6" size="md">
                  Printers & Inks
                </Heading>
                <p>Printers</p>
                <p>Hard Disks & SSD</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "10px" }}
          >
            CAMERAS
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
                <Heading as="h6" size="md">
                  Computer Accessories
                </Heading>
                <p>OnePlus Nord 2T 5G</p>
                <p>Wearable Technology</p>
                <p>Smartphones</p>
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
                <Heading as="h6" size="md">
                  Headphones & Headsets
                </Heading>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <Heading as="h6" size="md">
                  eSlates
                </Heading>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "10px" }}
          >
            KITCHEN APPLIANCES
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
                <Heading as="h6" size="md">
                  Microwaves
                </Heading>
                <p>Water Purifiers</p>
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
                <p>Headphones & Headsets</p>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
                <p>Tablets & eReaders</p>
                <p>Every Day use Tablets below 15000</p>

                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p> <p>Premium Tablets, Above 15001</p>
                <p>Power Banks</p>
              </div>
            </div>
          </div>
          <div
            className="box94"
            style={{ cursor: "pointer", height: "100%", padding: "10px" }}
          >
            PERSONAL CARE
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
                <p>Smartphones</p>
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
                <p>Headphones & Headsets</p>
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
            style={{ cursor: "pointer", height: "100%", padding: "10px" }}
          >
            ACCESSORIES
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
                <p>Smartphones</p>
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
                <p>Headphones & Headsets</p>
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
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
