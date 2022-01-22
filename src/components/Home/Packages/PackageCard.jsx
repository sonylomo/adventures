import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//   import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

//   function Rating({ rating, numReviews }) {
//     return (
//       <Box d="flex" alignItems="center">
//         {Array(5)
//           .fill('')
//           .map((_, i) => {
//             const roundedRating = Math.round(rating * 2) / 2;
//             if (roundedRating - i >= 1) {
//               return (
//                 <BsStarFill
//                   key={i}
//                   style={{ marginLeft: '1' }}
//                   color={i < rating ? 'teal.500' : 'gray.300'}
//                 />
//               );
//             }
//             if (roundedRating - i === 0.5) {
//               return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//             }
//             return <BsStar key={i} style={{ marginLeft: '1' }} />;
//           })}
//         <Box as="span" ml="2" color="gray.600" fontSize="sm">
//           {numReviews} review{numReviews > 1 && 's'}
//         </Box>
//       </Box>
//     );
//   }

function PackageCard() {
  return (
    <Flex p={25} w="full" alignItems="center" justifyContent="space-around">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="md"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Badge
            px="2"
            fontSize="0.8em"
            colorScheme="red"
            position="absolute"
            left={2}
            top={2}
          >
            Nakuru
          </Badge>
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          // style={{ padding: '10px', transition: "transform"}}
          className="PackageCard__image"
        />

        <Box p="6">
          <Box borderBottom={'solid'} borderBottomWidth={1} pb={2}>
            <Heading
              fontSize="1xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {data.name}
            </Heading>
            <Text fontSize={16}>{data.description}</Text>
          </Box>
          <Flex
            borderBottom={'solid'}
            borderBottomWidth={1}
            fontWeight="regular"
            as="h5"
            height={20}
            pt={5}
            justifyContent={"space-between"}
          >
           <Box>Date</Box>
           <Box>Group Size</Box>

          </Flex>
          <Flex
            fontSize="2xl"
            color={useColorModeValue('gray.800', 'white')}
            pt={5}
            justifyContent={'space-between'}
          >
            <Box as="span" color={'gray.600'} fontSize="2xl">
              £{data.price.toFixed(2)}
            </Box>
            <Box>
              <Button>Book Now</Button>
            </Box>
          </Flex>

          {/* <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} /> 
          </Flex> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default PackageCard;
