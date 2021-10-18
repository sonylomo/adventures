import {
    Box, Button, Flex, Heading, Stack
} from '@chakra-ui/react';

const Welcome = () => {
  return (
    <Box
      w="full"
      h="container.sm"
      backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
      bgPos="center"
      bgSize="cover"
    //   bgGradient="linear(to-r, white, purple.300)"
    >
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Heading
            fontSize={['2xl', '3xl']}
            fontWeight="semibold"
            color="white"
            textTransform="uppercase"
          >
            CityVentures
          </Heading>
          <Button
            colorScheme="whiteAlpha"
            textTransform="uppercase"
            w="fit-content"
            class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            View Tours
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Welcome;
