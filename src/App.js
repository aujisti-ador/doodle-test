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
import Home from './components/Home';
import Favourite from './components/Favourite';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
