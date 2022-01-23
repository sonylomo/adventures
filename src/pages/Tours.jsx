import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Caroussel from '../components/Tours/Caroussel';
import TourCard from '../components/Tours/TourCard';
// import SearchTour from '../components/Tours/SearchTour';

const Tours = () => {
  return (
    <Box>
      <Caroussel />
      {/* <SearchTour/> */}
      <SimpleGrid
        columns={{sm: 1, md: 2}}
        spacingY="20px"
        bg={useColorModeValue('#F9FAFB', 'gray.600')}
        pt={'7%'}
      >
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </SimpleGrid>
    </Box>
  );
};

export default Tours;
