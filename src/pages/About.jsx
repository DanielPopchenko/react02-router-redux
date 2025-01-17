import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
