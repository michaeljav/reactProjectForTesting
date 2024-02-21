import { type ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
const RouterTest = (): ReactElement => {
  return (
    <Router>
      <div className='App'>
        <nav className='container mx-auto flex justify-between items-center'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/about'>About Us</Link>
          </div>
          <div>
            <Link to='/contact'>Contact Us</Link>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default RouterTest;
