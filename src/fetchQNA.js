document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const apiUrl = 'http://localhost:3000/pokemon'
  const pokemons = []
  const pokemonContainer = document.querySelector("#pokemon-container")
  getPokemon(apiUrl)
  debugger
  pokemons.forEach(pokemon => {
    const card = document.createElement('div')
    card.className = 'pokemon-card'
    debugger
    card.innerHTML = `
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites}">
      </div>
    </div>
    `
    pokemonContainer.append(card)
  })
  
  
})

function getPokemon(url){
  return fetch(url)
    .then(response => {
      return response.json()
    }).then(data => {
      return pokemons = [...data]
    })
}

