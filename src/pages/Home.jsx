import AboutUs from '../components/Home/AboutUs';
import MailUs from '../components/Home/MailUs';
import Packages from '../components/Home/Packages/Packages';
import Places from '../components/Home/Places/Places';
import Welcome from '../components/Home/Welcome';
// import Testimonial from '../components/Home/Testimonials/Testimonial';
import TestimonialCard from '../components/Home/Testimonials/TestimonialCard';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Packages />
      <Places />
      <AboutUs />
      <TestimonialCard/>
      <MailUs />
    </div>
  );
};

export default Home;
