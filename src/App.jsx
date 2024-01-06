import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import NotFound from './pages/notFound/NotFound';
import ItemDetails from './pages/item/ItemDetails';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = ({ children }) => {
  return (
    <div>
      {/* <h1>“And let the whole world know that you`re unique.”</h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ItemDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
