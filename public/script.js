let socket = io()

nextB = document.getElementById("nextButton");
div1 =  document.getElementById("player1div");
div2 =  document.getElementById("player2div");
pokeNaam =  document.getElementById("naamPokemon");
pokePlaatje =  document.getElementById("plaatjePokemon");



// Check voor 1e speler
document.getElementById("checkKnop").addEventListener("click", function() {
    const textVeld = document.getElementById("textVeld").value; 
    const naamPokemon = document.getElementById('naamPokemon').innerHTML;
    if(naamPokemon === textVeld){
      div1.classList.add('goedantwoord', 'ingevuld')
    }else{
      div1.classList.add('foutantwoord', 'ingevuld')
    }
    if(div1.classList.contains('goedantwoord') && div2.classList.contains('goedantwoord')) {
      startConfetti();
    }
    if(div1.classList.contains('ingevuld') && div2.classList.contains('ingevuld')) {
      nextB.classList.add('zichtbaar')
      pokeNaam.classList.add('zichtbaar')
      pokePlaatje.classList.add('zichtbaar')
    }

});

// Check voor 2e speler
document.getElementById("checkKnop2").addEventListener("click", function() {
  const textVeld2 = document.getElementById("textVeld2").value; 
  const naamPokemon = document.getElementById('naamPokemon').innerHTML;
  if(naamPokemon === textVeld2){
    div2.classList.add('goedantwoord', 'ingevuld')
  }else{
    div2.classList.add('foutantwoord', 'ingevuld')
  }
  if(div1.classList.contains('goedantwoord') && div2.classList.contains('goedantwoord')) {
    startConfetti();
  }
  if(div1.classList.contains('ingevuld') && div2.classList.contains('ingevuld')) {
    nextB.classList.add('zichtbaar')
    pokeNaam.classList.add('zichtbaar')
    pokePlaatje.classList.add('zichtbaar')
  }
});

// Volgende pokemon

nextB.addEventListener("click", function() {
  document.getElementById("textVeld").value = ''
  document.getElementById("textVeld2").value = ''
  nextB.classList.remove('zichtbaar')
  pokeNaam.classList.remove('zichtbaar')
  pokePlaatje.classList.remove('zichtbaar')
  div1.classList.remove('foutantwoord', 'ingevuld','goedantwoord')
  div2.classList.remove('foutantwoord', 'ingevuld','goedantwoord')
  let pokeNummer = Math.floor(Math.random() * 151);

  
})