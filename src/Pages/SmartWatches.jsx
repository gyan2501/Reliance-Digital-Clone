import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { AppContext } from "../context/AppContext";
import Grid1 from "./Grid1";
import { reducer } from "../components/reducer";
const SmartWatches = () => {
  const { addItems8, inlove } = useContext(AppContext);
  const handle = (e) => {
    let [l, r] = e;
    let left = l * 200 + 26999;
    let right = 46999 - (100 - r) * 200;
    //    console.log(left,right)
    setFirst(left);
    setSecond(right);
  };
  const [first, setFirst] = useState(26999);
  const [second, setSecond] = useState(46999);
  const [exclude, setExclude] = useState(false);
  const [brand1, setBrand1] = useState("");
  const [item1, setitem1] = useState(addItems8);
  const handleSlider = () => {
    let y = addItems8.filter((e) => e.price > first && e.price < second);
    setitem1(y);
  };
  const handleBrand = (val, check) => {
    let g = check.target.checked;
    if (g === true) {
      let y = addItems8.filter((e) => e.name.includes(val));
      setitem1(y);
      setBrand1(val);
    } else {
      setitem1(addItems8);
      setBrand1("");
    }
  };

  const [state, dispatch] = useReducer(reducer, inlove);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Flex justifyContent="flex-start">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            {" "}
            <BreadcrumbLink href="#" pl={"15"}>
              <i class="fa-solid fa-house-chimney"></i>
            </BreadcrumbLink>{" "}
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" >Search</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <hr />
      <Flex>
        <Box width={"20%"} padding="10px" textAlign={"justify"}>
          <VStack spacing={4} align="stretch">
            <Box h="50px" boxShadow="md" backgroundColor={"white"}>
              {" "}
              <Heading as="h2" mt={"8px"} ml={"15px"} size="md">
                FILTERS
              </Heading>
            </Box>
            <Box textAlign={"justify"}>
              <VStack boxShadow="md" textAlign={"justify"} p={"15px"}>
                <Text
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize="l"
                  ml={"-210px"}
                  mb={"-12px"}
                >
                  Price
                </Text>
                <RangeSlider
                  colorScheme="gray"
                  aria-label={["min", "max"]}
                  defaultValue={[0, 100]}
                  onChange={(e) => handle(e)}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Flex justifyContent={"space-between"} width="100%">
                  <Text>₹26999</Text>
                  <Text>₹46999</Text>
                </Flex>

                <Flex gap={"5px"}>
                  <Input
                    borderRadius={"none"}
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                  <Text m={"8px"}>to</Text>
                  <Input
                    borderRadius={"none"}
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                  />
                  <Button
                    color={"white"}
                    bgColor={"#003380"}
                    borderRadius={"none"}
                    onClick={handleSlider}
                  >
                    GO
                  </Button>
                </Flex>
              </VStack>
            </Box>
            <br />
            <VStack
              padding={"15px"}
              boxShadow="md"
              alignItems="flex-start"
              paddingLeft="10px"
            >
              <Text fontSize="md" fontWeight={"bold"}>
                Availability
              </Text>
              <Flex gap="1rem">
                <Checkbox />
                <Text>Exclude out of Stock</Text>
              </Flex>
            </VStack>
            <VStack
              padding={"15px"}
              boxShadow="md"
              alignItems="flex-start"
              paddingLeft="10px"
            >
              <Text fontSize="md" fontWeight={"bold"}>
                Category
              </Text>
              <Flex gap="1rem">
                <Checkbox />
                <Text>SmartWatches</Text>
              </Flex>
            </VStack>
            <VStack
              padding={"15px"}
              boxShadow="md"
              alignItems="flex-start"
              paddingLeft="10px"
            >
              <Text fontSize="md" fontWeight={"bold"}>
                Brand
              </Text>
              <Flex gap="1rem">
                {" "}
                <Checkbox onChange={(e) => handleBrand("Boltt", e)} />
                <Text>Boltt</Text>
              </Flex>
              <Flex gap="1rem">
                <Checkbox onChange={(e) => handleBrand("Apple", e)} />
                <Text>Apple</Text>
              </Flex>
              <Flex gap="1rem">
                <Checkbox onChange={(e) => handleBrand("Hammer", e)} />
                <Text>Hammer</Text>
              </Flex>
            </VStack>
          </VStack>
        </Box>
        <Box padding={0}>
          <Flex
            boxShadow="md"
            color="#b0b5b9"
            justifyContent="space-between"
            height="50px"
            paddingLeft="20px"
            alignItems="center"
          >
            <Box>
              (Showing 1- {item1.length} products of {item1.length} products)
            </Box>
            <Flex color={"black"} marginRight={"80px"} gap={"12px"}>
              {" "}
              <Text>Sort By:</Text>{" "}
              <Button bgColor={"white"} size="xs" border={"1px solid green"}>
                Relevance
              </Button>
              <Button bgColor={"white"} border={"1px solid green"} size="xs">
                Price(Low-High)
              </Button>
              <Button bgColor={"white"} size="xs" border={"1px solid green"}>
                Price(High-Low)
              </Button>
            </Flex>
          </Flex>
          <br />
          <Flex boxShadow="md" p={"12px"} alignItems="center" gap="1rem">
            <Text paddingLeft="20px">Filters:</Text>
            <Flex gap="1rem">
              {exclude && (
                <Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">
                  Exclude out of Stock
                </Box>
              )}
              <Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">
                ₹ {first} to ₹ {second}
              </Box>
              <Box border={"1px solid #D3D3D3"} padding="0px 10px 0px 10px">
                Brand: {brand1.length === 0 ? "All" : brand1}
              </Box>
              
            </Flex>
          </Flex>
          <Box>
            <br />
            <Grid1 list1={item1} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SmartWatches;
