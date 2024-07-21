import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
// import Timeline from './container/Timeline';
import Faq from './container/Faq';
import FeaturedEvents from './container/FeaturedEvents';
import Sponsors from './container/Sponsors';
import Performances from './container/Performances';
import Location from './container/Location';
const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedEvents />
      <Location />
      <Sponsors />
      <Performances />
      <Faq />
    </MainLayout>
  );
};

export default HomePage;