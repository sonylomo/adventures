import {
  Box, Center,
  Heading, Link, Stack, Text
} from '@chakra-ui/react';
import PackageCard from './PackageCard';

const Packages = () => {
  return (
    <Box pb="5%">
      <Box pt={'5%'} pb={5}>
        <Text
          color="#00a7c7"
          fontSize={'33px'}
          style={{
            fontFamily: 'Satisfy, cursive',
            font: ' 400 regular',
            lineHeight: '1.8em',
          }}
        >
          Plan The
        </Text>
        <Heading as="h2" size="3xl">
          Perfect Holiday
        </Heading>
      </Box>
      <Center width={'50%'} m={'auto'}>
        We've got maximum luxury at affordable prices and discounts.
      </Center>
      <Stack
        direction={['column', 'row']}
        paddingBottom="3%"
        mr="5%"
        ml="5%"
        justifyContent={'space-around'}
      >
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Stack>
      <Link href="/Tours" isExternal>
        <Text fontWeight={300} color="#00a7c7">
          View More Epic Deals
        </Text>
      </Link>
    </Box>
  );
};

export default Packages;
