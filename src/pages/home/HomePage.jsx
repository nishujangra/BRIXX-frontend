import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Timeline from './container/Timeline';
import Faq from './container/Faq';
import FeaturedEvents from './container/FeaturedEvents';

const HomePage = () => {
  return (
    <MainLayout>
        <Hero />
        <FeaturedEvents />
        <Timeline />
        <Faq />
    </MainLayout>
  );
};

export default HomePage;