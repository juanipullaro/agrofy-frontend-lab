import React, { useState, useEffect } from 'react';
import './PokemonCard.css';
 
const PokemonCard = () => {
    const [pokemons,setPokemons] = useState([]);

    useEffect(()=>{
        for (var i=1;i<=150;i++){
            fetch('http://pokeapi.co/api/v2/pokemon/'+i)
                .then((response) =>{
                    return response.json();
                })
                .then((myJson)=>{
                    const {name,id,types,sprites:{front_default:img}} = myJson;
                    let typesArray = [];
                    for (let {type:{name:typeName}} of types){
                        typesArray.push(typeName);
                    }
                    const pokemon = {'name':name,'id':id,'types':typesArray.toString(),'image':img};
                    setPokemons(pokemons => [...pokemons, pokemon])
                })
                .catch(error => console.error(error));
        }
        console.log(pokemons)
        localStorage.setItem("pokemons",JSON.stringify(pokemons))
    },[])

    
    
    return <div className="pokemon-cards">
        {pokemons.map(pokemon=>{ 
            const state = 'Add to Favs';
            const state_class = '';
            return <div className="card"  key={pokemon.id}>
                <div className="img-card">
                    <img src={pokemon.image} alt="img {pokemon.name}"/> 
                </div> 
                <div className="body-card">
                    <h3>{pokemon.name}</h3>
                    <p>Types: {pokemon.types}</p>
                    <button className="btn-home btn-card {state_class}">{state}</button>
                </div>
            </div>;
        })}
    </div>
   

       
}

export default PokemonCard;