import React from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <Pricing />
      <Footer />

    </div>
  );
};

export default App;
