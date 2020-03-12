import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';

const History = () => {

    return (<section id="history">
        <div id="year1980">
            <div className="year">
                <object data="juegos.svg" type="image/svg+xml"></object>
                <h2>1980</h2>
            </div>
            <div className="hist-desc">
                <h3>First Step</h3>
                <p>Pokémon is short for “Pocket Monsters", the original Japanese name.
                The franchise has its roots in a gaming magazine in the early 1980s in Japan—Game Freak,
                started by Satoshi Tajiri and Ken Sugimori. Tajiri was the writer, while Sugimori was the illustrator.</p>
            </div>

        </div>
        <div id="year1996">
            <div className="year">
            <h2>1996</h2>
            <object data="palanca-de-mando.svg" type="image/svg+xml"></object>
            </div>
            <div className="hist-desc">
                <h3>Game Boy</h3>
                <p>26 February 1996 marks the debut of the Pokémon franchise in the form of both those games on the Game Boy in Japan.
                At its heart, Pocket Monsters: Red and Green was a very basic Japanese role-playing game.</p>
            </div>

        </div>
        <div id="year1998">
            <div className="year">
            <object data="avatar.svg" type="image/svg+xml"></object>
            <h2>1998</h2>
            </div>
            <div className="hist-desc">
                <h3>Pikachu</h3>
                <p>The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and loved Pokémon out there.
                Pocket Monsters’ success led to North America getting the games in 1998 for the Game Boy (as Pokémon Red and Blue).
                These few years in the public saw Pokémon go from a game about a hobby to a worldwide phenomenon</p>
            </div>
        </div>
    </section>)

}

export default History;