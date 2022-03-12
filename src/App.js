import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import Header from './components/Header';
import Home from './screens/Home';
import Favourite from './screens/Favourite';
import Details from './screens/Details';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
