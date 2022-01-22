import {
    Heading,
    useColorModeValue,
    Box,
    Text,
    Flex,
    Link,
    Image,
  } from '@chakra-ui/react';
  
  const TestimonialCard = () => {
    return (
      <Flex
        bg={useColorModeValue('#F9FAFB', 'gray.600')}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="md"
          mx="auto"
          py={4}
          px={8}
          bg={useColorModeValue('white', 'gray.800')}
          shadow="lg"
          rounded="lg"
        >
          <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
            <Image
              w={20}
              h={20}
              fit="cover"
              rounded="full"
              borderStyle="solid"
              borderWidth={2}
              borderColor={useColorModeValue('brand.500', 'brand.400')}
              alt="Card avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            />
          </Flex>
  
          <Heading
            as="h2"
            color={useColorModeValue('gray.800', 'white')}
            fontSize={{ base: '2xl', md: '3xl' }}
            mt={{ base: 2, md: 0 }}
            fontWeight="bold"
          >
            Cards
          </Heading>
  
          <Text mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
            deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
            commodi hic, suscipit in a veritatis pariatur minus consequuntur!
          </Text>
  
          <Flex justifyContent="end" mt={4}>
            <Link
              fontSize="xl"
              color={useColorModeValue('brand.500', 'brand.300')}
            >
              John Doe
            </Link>
          </Flex>
        </Box>
      </Flex>
    );
  };
  
  export default TestimonialCard;
  