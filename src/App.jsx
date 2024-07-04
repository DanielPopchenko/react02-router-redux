import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Navigations from './components/Navigations';
import Product from './pages/Product';
import Mission from './pages/Mission';
import Reviews from './pages/Reviews';
import Team from './pages/Team';

const App = () => {
  return (
    <div>
      <Navigations />
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            {/* nested routes */}
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
