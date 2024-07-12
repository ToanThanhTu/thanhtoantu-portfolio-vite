import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/#about" Component={About} />
          <Route path="/#work" Component={Work} />
          <Route path="/#contact" Component={Contact} />
        </Routes>
      </Router>
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default App;
