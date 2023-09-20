import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to your app!</p>
      <Link to="/greeting">Go to Greeting</Link>
    </div>
  );
};

export default Home;
