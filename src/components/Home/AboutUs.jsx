import {
  Flex, Heading,
  Image, SimpleGrid, Text, useColorModeValue
} from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} m='auto' maxW={'80%'}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: 'full' }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <Heading
          as="h5"
          color={useColorModeValue('brand.600', 'gray.300')}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Award winning support
        </Heading>
        <Heading
          as="h1"
          mb={4}
          fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color={useColorModeValue('brand.600', 'gray.300')}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          We're here to help
        </Heading>
        <Text
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue('brand.600', 'gray.400')}
          letterSpacing="wider"
        >
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </Text>
      </Flex>
    </SimpleGrid>
  );
};

export default AboutUs;
