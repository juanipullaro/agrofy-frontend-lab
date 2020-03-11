import React, {useState} from 'react';
import './MyFavs.css';

const MyFavs = () => {
  const [myFavs,setMyFavs] = useState(JSON.parse(localStorage.getItem("myFavs")));
  
  return <div className="myfavs-page">
    <h1>My Favs</h1>
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

export default MyFavs;
