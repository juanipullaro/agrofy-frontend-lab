import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    
    return (<section className="hero">
    <div className="hero-div">
        <img src="/pikachu.svg" alt="pikachu"/>
        <div className="home-div">
            <h1>Welcome to Pokedex</h1>
            <p>Join out community to find Pokemons's news</p>
            <button className="btn-home"> <Link to="/history">View more</Link></button>
        </div>
    </div>
       
      <div className="svg-div" >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="svg">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
        </div>
    </section>)

}

export default Hero;