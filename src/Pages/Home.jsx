import { Image ,Box } from "@chakra-ui/react";
import Carousel1 from "../Components/Carousel";
function Home() {
  return (
    <>
      
      <Box >
        <Image width={"100%"}
          src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx"
          alt="banner"
        />
      </Box>
     <Carousel1 />
      
    </>
  );
}
export default Home;
