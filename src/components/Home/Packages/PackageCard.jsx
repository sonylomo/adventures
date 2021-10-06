import { Badge, Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
//   import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import styles from './Packages.module.css';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
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
    <Flex p={50} w="full" alignItems="center" justifyContent="space-around">
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
            rounded="full"
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
          className={styles.PackageCard__image}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
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
