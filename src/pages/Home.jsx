import AboutUs from '../components/Home/AboutUs';
import Caroussel from '../components/Home/Caroussel';
import Packages from '../components/Home/Packages/Packages';
import MailUs from '../components/Home/MailUs';
import Services from '../components/Home/Services';

const Home = () => {
  return (
    <div>
      <Caroussel />
      <Packages />
      <Services />
      <AboutUs />
      <MailUs />
    </div>
  );
};

export default Home;
