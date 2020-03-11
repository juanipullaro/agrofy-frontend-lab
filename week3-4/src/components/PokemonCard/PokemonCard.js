import React from 'react';
import './PokemonCard.css';

 
const PokemonCard = (props) => {
   
    const clicked = () => {
        props.callback();
    };

    return <div className="card"  key={props.id}>
                <div className="img-card">
                    <img src={props.img} alt="img {props.name}"/> 
                </div> 
                <div className="body-card">
                    <h3>{props.name}</h3>
                    <p>Types: {props.types}</p>
                    <button className={props.className} onClick={() =>clicked()}>{props.label}</button>
                </div>
            </div>
    
   

       
}

export default PokemonCard;