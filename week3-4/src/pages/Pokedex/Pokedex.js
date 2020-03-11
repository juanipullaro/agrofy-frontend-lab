import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Pokedex.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon,setFilteredPokemon] = useState([]);
  const [myFavs,setMyFavs] = useState(JSON.parse(localStorage.getItem("myFavs")) || []);

  const filterPokemon = (text) => {
    if (text===""){
      setFilteredPokemon(pokemons);
    }
    else{
      setFilteredPokemon(pokemons.filter(p => p.name.startsWith(text)));
    }
  }

  useEffect(() => {
    for (var i = 1; i <= 150; i++) {
      fetch('http://pokeapi.co/api/v2/pokemon/' + i)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          const { name, id, types, sprites: { front_default: img } } = myJson;
          let typesArray = [];
          for (let { type: { name: typeName } } of types) {
            typesArray.push(typeName);
          }
          const pokemon = { 'name': name, 'id': id, 'types': typesArray.toString(), 'image': img,'is_fav':myFavs.find((p)=> {return p.id === id})===undefined?false:true};
          setPokemons(pokemons => [...pokemons, pokemon]);
          setFilteredPokemon(pokemons =>[...pokemons, pokemon]);
        })
        .catch(error => console.error(error));
    }
  }, []);

  const addFavs = (pokemon) => {
    const poke = pokemons.map((p)=>{
      if (p.id === pokemon.id){
        p.is_fav=true;
      }
    return p});
    let aux=[...myFavs, pokemon];
    localStorage.setItem("myFavs", JSON.stringify(aux));
    setMyFavs(aux);
    setPokemons(poke);

  }

  const removeFavs = (pokemon) => {
    const poke = pokemons.map((p)=>{
      if (p.id === pokemon.id){
        p.is_fav=false;
      }
    return p});
    let aux = myFavs.filter((p) =>{return p.id !== pokemon.id});
    localStorage.setItem("myFavs", JSON.stringify(aux));
    setMyFavs(aux);
    setPokemons(poke);
    
  }


  return <div className="pokedex-page">
    <h1>Pokedex</h1>
    <SearchBar callback={filterPokemon}/>
    <div className="pokemon-cards">
    {filteredPokemon.map((p) =>{
      if(p.is_fav){
        return <PokemonCard className="btn-card btn-remove" callback={()=>removeFavs(p)} label="Remove" id={p.id} name={p.name} types={p.types} img={p.image}/>
      }
      else{
        return <PokemonCard className="btn-card" callback={()=>addFavs(p)} label="Add Favs" id={p.id} name={p.name} types={p.types} img={p.image}/>
      }})}
  </div>
  </div>
};

export default Pokedex;
