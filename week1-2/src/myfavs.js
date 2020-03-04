const show_pokemon = (pokemon) =>{
    let card;
    if (localStorage.getItem(pokemon.id)==null){
        card = '<div class="card" >'+
                '<div class="img-card">'+
                '<img src="'+pokemon.image+'"> </div> '+
                '<div class="body-card">'+
                '<h3>'+pokemon.name+'</h3>'+
                '<p>Types: '+pokemon.types+'</p>'+
                '<button class="btn-home btn-card" id="'+pokemon.name+'">Add to favs</button>'+
                '</div></div>';
    }
    else{
        card = '<div class="card" >'+
                '<div class="img-card">'+
                '<img src="'+pokemon.image+'"> </div> '+
                '<div class="body-card">'+
                '<h3>'+pokemon.name+'</h3>'+
                '<p>Types: '+pokemon.types+'</p>'+
                '<button class="btn-home btn-card btn-remove" id="'+pokemon.name+'">Remove</button>'+
                '</div></div>';
    }
    const cards = document.querySelector(".poke-cards");
    cards.insertAdjacentHTML('beforeend',card);
}
const add_fav = (pokemon)=>{
        let button = document.querySelector('#'+pokemon.name);
        button.addEventListener("click",()=>{
                if (button.className != "btn-home btn-card"){
                    localStorage.removeItem(pokemon.id);

                    button.parentElement.parentElement.parent.innerHTML =  "";
                }

})}
let show_favs = () =>{
    for(let i=0;i<localStorage.length;i++){
        pokemon_id = localStorage.key(i);
        pokemon = JSON.parse(localStorage.getItem(pokemon_id))
        console.log(pokemon)
        show_pokemon(pokemon);
        add_fav(pokemon);

    }
}
window.onload = show_favs();
