import { Box, Image, Heading } from '@chakra-ui/react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <Box width="100%" display="flex" justifyContent="space-around">
      <Box width="40%" height="60vh" className={styles.AboutUs}>
        <Heading pb="4">About Us</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          inventore veritatis repellat quia eveniet voluptatum aspernatur vero
          maxime molestiae, nihil consequatur molestias placeat voluptates et
          error voluptatibus! Voluptates, consectetur enim.
        </p>
      </Box>
      <Box width="40%" >
        <Image
          src={
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80'
          }
          alt={`Picture of Ian`}
          roundedTop="lg"
          className={styles.AboutUs__image}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
