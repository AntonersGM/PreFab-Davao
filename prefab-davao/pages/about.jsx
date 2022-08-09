import React from 'react';
import Hero from '../components/Hero';
import Footer from './footer';

const about = () => {
  return (
    <div>
      <Hero
        heading="About Us"
        message={
          'We are selling the cheapest prefab containers in the Philippines.'
        }
      />
      <Footer />
    </div>
  );
};

export default about;