import React, {useState} from 'react';
import './MyFavs.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const MyFavs = () => {
  const [myFavs,setMyFavs] = useState(JSON.parse(localStorage.getItem("myFavs")));
  
  const removeFavs = (pokemon) => {
    let aux = myFavs.filter((p) =>{return p.id !== pokemon.id});
    localStorage.setItem("myFavs", JSON.stringify(aux));
    setMyFavs(aux);
    
  }
  return <div className="myfavs-page">
    <h1>My Favs</h1>
    <div className="pokemon-cards">
    {myFavs.map((p) =>{
        return <PokemonCard className="btn-card btn-remove" callback={()=>removeFavs(p)} label="Remove" id={p.id} name={p.name} types={p.types} img={p.image}/>
     })}
    </div>
  </div>
};

export default MyFavs;
