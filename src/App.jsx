import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContactUs from './pages/ContactUs';
import Destinations from './pages/Destinations';
import Home from './pages/Home';
import Tours from './pages/Tours';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Destinations" component={Destinations} />
      <Route path="/Tours" component={Tours} />
      <Route path="/Contacts" component={ContactUs} />
    </Switch>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <NavBar />
        <Router>
          <AppRoutes />
        </Router>
      </Box>
    </ChakraProvider>
  );
};

export default App;
