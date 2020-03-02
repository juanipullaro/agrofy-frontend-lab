const section = document.querySelector("section");
var pokemons = [];
const show_pokemon = (pokemon) =>{
    let card = '<div class="card" id="'+pokemon.name+'">'+
                '<div class="img-card">'+
                '<img src="'+pokemon.image+'"> </div> '+
                '<div class="body-card">'+
                '<h3>'+pokemon.name+'</h3>'+
                '<p>Types: '+pokemon.types+'</p>'+
                '<button class="btn-home btn-card">Add to  favs</button>'+
                '</div></div>';
    const cards = document.querySelector(".poke-cards");
    console.log(cards)
    cards.insertAdjacentHTML('beforeend',card);
}
const add_pokemons = () =>{
    console.log('hola');
    for (var i = 1; i <150 ; i++){
        fetch('http://pokeapi.co/api/v2/pokemon/'+i)
            .then((response) =>{
                return response.json();
            })
            .then((myJson)=>{
                /*console.log(myJson);**/
                const {name,id,types,sprites:{front_default:img}} = myJson;
                var typesArray = [];
                for (var {type:{name:typeName}} of types){
                    typesArray.push(typeName);
                }
                const pokemon = {'name':name,'id':id,'types':typesArray.toString(),'image':img};
                pokemons.push(pokemon);
                show_pokemon(pokemon);  
            })
            .catch(error => console.error(error));
    }}
section.addEventListener('load',add_pokemons());

var input = querySelector(".search-input");
filter_pokemons = (input_text)=>{
    pokemons.filter(f = (poke)=> {
        return poke.name == input_text;
    });
}