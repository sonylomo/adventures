import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import NotificationIcon from '../../assets/NotificationIcon'

function MailUs() {
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}
      minW={'70%'}
      >
        <Icon as={NotificationIcon} w={24} h={24} />
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}
          >
            Subscribe
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Be the first to hear about discounted deals and new tours!
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Input
            type={'text'}
            placeholder={'john@doe.net'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}
          >
            Subscribe
          </Button>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color='gray.500'>
          {/* color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"} */}
            You won't receive any spam!🤞
        </Text>
      </Stack>
    </Flex>
  );
}


export default MailUs;
