import React from 'react';
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import { MdHeadset, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const TourCard = () => {
  return (
    <Box
      my={7}
      w="sm"
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        objectPosition="center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <Flex alignItems="center" px={6} py={3} bg="gray.900">
        <Icon as={MdHeadset} h={6} w={6} color="white" />

        <Heading as="h1" mx={3} color="white" fontWeight="bold" fontSize="lg">
          Focusing
        </Heading>
      </Flex>

      <Box py={4} px={6}>
        <Heading
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'white')}
        >
          Patterson johnson
        </Heading>

        <Text py={2} color={useColorModeValue('gray.700', 'gray.400')}>
          Full Stack TourCardker and UI / UX Designer , love hip hop music
          Author of Building UI.
        </Text>

        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

          <Heading as="h1" px={2} fontSize="sm">
            Choc UI
          </Heading>
        </Flex>

        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={MdLocationOn} h={6} w={6} mr={2} />

          <Heading as="h1" px={2} fontSize="sm">
            California
          </Heading>
        </Flex>
        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={MdEmail} h={6} w={6} mr={2} />

          <Heading as="h1" px={2} fontSize="sm">
            patterson@example.com
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default TourCard;
