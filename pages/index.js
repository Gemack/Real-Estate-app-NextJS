import Head from "next/head";
import Property from "../Components/Property";
import Banner from "../Components/Banner";
import { Flex, Box } from "@chakra-ui/react";
import { baseUrl, getData } from "../utils/Api";

export default function Home({ Sale, Rent }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="An Real Estate App for renting and buying home built with NEXTJS"
        ></meta>
        <title>Real Estate App</title>
      </Head>

      <Box>
        <Banner
          purpose="WANT TO RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1=" Explore from Apartments, builder floors, villas"
          desc2="and more"
          buttonText="Explore Renting"
          linkname="/search?purpose=for-rent"
          imgUrl="/img one.jpg"
        />
        <Flex flexWrap="wrap">
          {Rent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        <Banner
          purpose="WANT TO BUY A HOME"
          title1=" Find, Buy & Own Your"
          title2="Your Dream Home"
          desc1=" Explore from Apartments, land, builder floors,"
          desc2=" villas and more"
          buttonText="Explore for  Buying"
          linkname="/search?purpose=for-sale"
          imgUrl="/img two.jpg"
        />
        <Flex flexWrap="wrap">
          {Sale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const Sale = await getData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const Rent = await getData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      Sale: Sale?.hits,
      Rent: Rent?.hits,
    },
  };
}
