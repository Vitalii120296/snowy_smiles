import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './modules/HomePage';
import { About } from './modules/About/About';
import { Whitening } from './modules/Whitening';
import { Cleaning } from './modules/Cleaning';
import { Contact } from './modules/Contact';

export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='about-us' element={<About />} />
        <Route path='teeth-whitening' element={<Whitening />} />
        <Route path='teeth-cleaning' element={<Cleaning />} />
        <Route path='contact-us' element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);