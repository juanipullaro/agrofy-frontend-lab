import React, { useState } from 'react';
import './SearchBar.css';
 
const SearchBar = () => {
    const [input, setInput] = useState('');
    const handleOnChange = (eventValue) =>{
        setInput(eventValue);
        if (input === ''){
            console.log("input is empty");
        }
        else{
            console.log(input);
        }
    }
    const search = () =>{
        console.log("button was clicked");
    }
    return (<div className="search-bar"> 
        <input className="input" type="text" value={input} onChange={event => handleOnChange(event.target.value)} />
        <button className="btn-search" onClick={search}>Search</button>
    </div>)
       
}

export default SearchBar;