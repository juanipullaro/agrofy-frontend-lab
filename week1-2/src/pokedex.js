const section = document.querySelector("section");
let pokemons = [];
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
                if (button.className == "btn-home btn-card"){
                    localStorage.setItem(pokemon.id,JSON.stringify(pokemon));
                    button.innerHTML = "Remove";
                    button.classList.add("btn-remove");
                    //button.innerHTML ='<button class="btn-home btn-card" id="'+pokemon.name+'">Remove</button>';
                }
                else{
                    localStorage.removeItem(pokemon.id,JSON.stringify(pokemon));
                    button.innerHTML =  "Add to favs";
                    button.classList.remove("btn-remove");
                }

})}

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
                return pokemon;
            })
            .then((pokemon)=>{add_fav(pokemon);})
            .catch(error => console.error(error));
    }}


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
        add_fav(pokemon);

    }
};

let show_all_pokemons = ()=>{
    input_text = input.value.toLowerCase();
    console.log(input_text);
    if (input_text.length ==0){
        section.innerHTML="";
        for (let pokemon of pokemons){
            show_pokemon(pokemon);
            add_fav(pokemon);
        }
    }
}


const btn_search = document.querySelector("#search-btn");
input.addEventListener("input",show_all_pokemons);
btn_search.addEventListener("click",search_pokemons);

window.onload = add_pokemons();


//const btn_addFavs= document.querySelectorAll(".card button");
/*const add_favs = () =>{
    console.log("hola");
    console.log(btn_addFavs);

    btn_addFavs.addEventListener("click",()=>{
        pokemon_id = btn.parentElement.parentElement.id;
        pokemon = pokemons.filter(f = (poke)=> {poke.id = pokemon_id});
        if (btn_addFavs.value == "Add to favs"){
            localStorage.setItem(pokemon);
            btn_addFavs.innerHTML = '<button class="btn-home btn-card">Remove</button>';
        }
        else{
            localStorage.removeItem(pokemon);
            btn_addFavs.innerHTML =  '<button class="btn-home btn-card">Add to  favs</button>';
        }
        
    })
}
window.onload=add_favs;*/