import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (
    <div className="bg-gray-400">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-200')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-200')}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-200')}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigations;
