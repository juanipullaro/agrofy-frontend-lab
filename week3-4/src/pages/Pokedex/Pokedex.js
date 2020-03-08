import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Pokedex.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => (
  <div className="pokedex-page">
    <h1>Pokedex</h1>
    <SearchBar />
    <PokemonCard />
  </div>
);

export default Pokedex;
