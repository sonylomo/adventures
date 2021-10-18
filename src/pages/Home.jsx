import AboutUs from '../components/Home/AboutUs';
import MailUs from '../components/Home/MailUs';
import Packages from '../components/Home/Packages/Packages';
import Services from '../components/Home/Services';
import Welcome from '../components/Home/Welcome';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Packages />
      <Services />
      <AboutUs />
      <MailUs />
    </div>
  );
};

export default Home;
