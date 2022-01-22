import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const PlacesCard = () => {
  return (
    <Flex
      p={5}
      bg="gray.300"
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="sm"
      mx="auto"
    >
      <Box
        h={200}
        w="full"
        rounded="lg"
        shadow="md"
        bgSize="cover"
        bgPos="center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)',
        }}
      >
        <Text
          p={2}
          ml={2}
          textAlign="left"
          fontFamily={'Satisfy, cursive'}
          fontWeight="regular"
          fontSize={'1.0em'}
          color={useColorModeValue('white')}
          letterSpacing={1}
        >
          Nairobi
        </Text>
      </Box>
    </Flex>
  );
};

export default PlacesCard;
