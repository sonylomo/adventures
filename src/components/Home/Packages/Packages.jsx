import { Center, Heading, HStack, Link } from '@chakra-ui/react';
import PackageCard from './PackageCard';
import styles from './Packages.module.css';

const Packages = () => {
  return (
    <div className={styles.packages}>
      {/* <hr /> */}
      <Heading as="h2">Check out our epic deals</Heading>
      <p className={styles.packages__subtitle}>
        We've got maximum luxury at affordable prices and discounts.
      </p>
      <HStack paddingBottom="3%">
        <Center w="100%">
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </Center>
      </HStack>
      <Link href="/Tours" isExternal>
        View More Deals
      </Link>
    </div>
  );
};

export default Packages;
