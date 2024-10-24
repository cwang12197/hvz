import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../Home/Home.js';
import Navbar from '../Navbar/Navbar.js';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
