const section = document.querySelector("section");
let pokemons = [];
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
    cards.insertAdjacentHTML('beforeend',card);
}
const add_pokemons = () =>{
    for (let i = 1; i <150 ; i++){
        fetch('http://pokeapi.co/api/v2/pokemon/'+i)
            .then((response) =>{
                return response.json();
            })
            .then((myJson)=>{
                /*console.log(myJson);**/
                const {name,id,types,sprites:{front_default:img}} = myJson;
                let typesArray = [];
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

const input = document.querySelector(".search-input");
let search_pokemons= ()=>{
    pokemons_filter = pokemons.filter(f = (poke)=> {
        input_text = input.value.toLowerCase();
        return poke.name.startsWith(input_text);
    });
    const section = document.querySelector("section");
    section.innerHTML="";
    for (let pokemon of pokemons_filter){
        show_pokemon(pokemon);

    }
};

let show_all_pokemons = ()=>{
    input_text = input.value.toLowerCase();
    console.log(input_text);
    if (input_text.length ==0){
        section.innerHTML="";
        for (let pokemon of pokemons){
            show_pokemon(pokemon);
        }
    }
}


const btn_search = document.querySelector("#search-btn");
input.addEventListener("input",show_all_pokemons);
btn_search.addEventListener("click",search_pokemons);

