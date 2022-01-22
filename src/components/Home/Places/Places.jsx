import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import PlacesCard from './PlaceCard';

const Places = () => {
  return (
    <Box pb={5} mb={10} bg="gray.300">
      <Box pb={5}>
        <Text
          color="#00a7c7"
          fontSize={'33px'}
          style={{
            fontFamily: 'Satisfy, cursive',
            font: ' 400 regular',
            lineHeight: '1.8em',
          }}
        >
          Choose Your
        </Text>
        <Heading as="h2" size="3xl">
          Destination
        </Heading>
        <Center width={'50%'} m={'auto'} pt={1}>
          Where do you want to travel?
        </Center>
      </Box>
      <Flex
        bg={useColorModeValue('#F9FAFB', 'gray.600')}
        w="full"
        justifyContent="space-evenly"
      >
        <PlacesCard />
        <PlacesCard />
        <PlacesCard />
        <PlacesCard />
      </Flex>
    </Box>
  );
};

export default Places;
