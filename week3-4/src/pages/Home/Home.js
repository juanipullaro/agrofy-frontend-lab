import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Videos from '../../components/Videos/Videos';
import Contact from '../../components/Contact/Contact';

const Home = () => (

  <div className="home-page">
    <Hero/>
    <History/>
    <Videos/>
    <Contact/> 
  </div>
);

export default Home;
