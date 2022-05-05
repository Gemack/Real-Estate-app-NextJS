import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
const Banner = ({
  purpose,
  title1,
  title2,
  imgUrl,

  linkname,
  buttonText,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    m="5"
    flexDirection="column"
  >
    <img src={imgUrl} width={700} height={300} alt="banner" />
    <Box p="5">
      <Text color="lime" fontSize="lg" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="black" fontSize="md" fontWeight="bold">
        {title1} {title2}
      </Text>
      <Text
        color="gray.500"
        fontSize="lg"
        paddingTop="3"
        fontWeight="medium"
      ></Text>
      <Button fontSize="xl" bg="lime" color="white">
        <Link href={linkname}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default Banner;
