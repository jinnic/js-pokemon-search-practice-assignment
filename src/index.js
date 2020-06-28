let  pokemons = []
document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const apiUrl = 'http://localhost:3000/pokemon'
  
  getPokemon(apiUrl)
  const search = document.querySelector("#pokemon-search-form")
  search.addEventListener('input', e => {
    const input = e.target.value.trim().toLowerCase()
    const filteredMons = pokemons.filter(p => p.name.includes(input))
    createCards(filteredMons)
  })
  
  
})

function getPokemon(url){
  return fetch(url)
    .then(response => {
      return response.json()
    }).then(data => {
      pokemons = [...data]
      createCards(pokemons)
    })
}

function createCards(pokemons){
  const pokemonContainer = document.querySelector("#pokemon-container")
  pokemonContainer.innerHTML = ""
  /***add Event Listner to container */
  pokemonContainer.addEventListener('click', e => {

    /***when clicked IMG  */
    if(e.target.dataset.action === 'flip'){
      const clickedPokemon = pokemons.find(pokemon => pokemon.id === parseInt(e.target.dataset.id))

      /***toggle between front and back*/
      if(e.target.src === clickedPokemon.sprites.front){
        e.target.src = clickedPokemon.sprites.back
      }else{
        e.target.src = clickedPokemon.sprites.front
      }
    }
    
  })
  
  pokemons.forEach(pokemon => {
    const card = document.createElement('div')
    card.className = 'pokemon-card'
    // debugger
    card.innerHTML = `
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
    `
    
    pokemonContainer.append(card)
  })
}