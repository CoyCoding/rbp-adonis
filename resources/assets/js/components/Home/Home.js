import React from 'react';
import WhatIsItSection from './WhatIsItSection/WhatIsItSection'
import Hero from './Hero/Hero';
import FaqSection from './FaqSection/FaqSection';
import Header from '.././Header/Header.js';

function Home() {
  return (

    <section id="home">
    <Header />
      <Hero />
      <WhatIsItSection />
      <FaqSection />
    </section>
  );
}

export default Home;
