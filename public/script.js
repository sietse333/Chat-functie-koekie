let socket = io()
nextB = document.getElementById("nextButton");
div1 = document.getElementById("player1div");
div2 = document.getElementById("player2div");
divArea = document.getElementById("divArea");
textVeld = document.getElementById("textVeld");
textveld2 = document.getElementById("textveld2");
pokeNaam = document.getElementById("naamPokemon");
pokePlaatje = document.getElementById("plaatjePokemon");
pokeSpelers = document.getElementById("pokeSpelers");


// Volgende pokemon
nextB.addEventListener("click", function () {
  // Start van de function via emit
  socket.emit('refreshPokemon');

})



// Player 1
document.getElementById("checkKnop").addEventListener("click", function () {
  // Start van de function via emit
  socket.emit('player1Check' ,  textVeld.value);

})

// Player 2
document.getElementById("checkKnop2").addEventListener("click", function () {
  // Start van de function via emit
  socket.emit('player2Check', textVeld2.value);
})

// Player 1 enter
textVeld.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    socket.emit('player1Check' ,  textVeld.value);
  }
});

// Player 2 enter
textVeld2.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    socket.emit('player2Check', textVeld2.value);
  }
});

// Player 1 code  
socket.on('player1Checkcode', player1Checkcode => {
  const naamPokemon = document.getElementById('naamPokemon').innerHTML;
  if (naamPokemon === player1Checkcode) {
    div1.classList.add('goedantwoord', 'ingevuld')
  } else {
    div1.classList.add('foutantwoord', 'ingevuld')
  }
  if (div1.classList.contains('goedantwoord') && div2.classList.contains('goedantwoord')) {
    startConfetti();
  }
  if (div1.classList.contains('ingevuld') && div2.classList.contains('ingevuld')) {
    nextB.classList.add('zichtbaar')
    document.getElementById("naamPokemon").classList.add('zichtbaar')
    document.getElementById("plaatjePokemon").classList.add('zichtbaar')
  }
  nextB.focus()
})

// Player 2 code
socket.on('player2Checkcode', player2Checkcode => {
  const naamPokemon = document.getElementById('naamPokemon').innerHTML;
  if (naamPokemon === player2Checkcode) {
    div2.classList.add('goedantwoord', 'ingevuld')
  } else {
    div2.classList.add('foutantwoord', 'ingevuld')
  }
  if (div1.classList.contains('goedantwoord') && div2.classList.contains('goedantwoord')) {
    startConfetti();
  }
  if (div1.classList.contains('ingevuld') && div2.classList.contains('ingevuld')) {
    nextB.classList.add('zichtbaar')
    document.getElementById("naamPokemon").classList.add('zichtbaar')
    document.getElementById("plaatjePokemon").classList.add('zichtbaar')
  }
  nextB.focus()
})

socket.on('err', err =>{
  alert("Maximaal aantal spelers is berijkt")

})

socket.on('count', count =>{
  pokeSpelers.innerHTML = '';
  pokeSpelers.innerHTML = "aantal spelers" + ":" + count.counter

})


// Next pokemon button actie
socket.on('pokemonHTML', pokemonHTML => {
  console.log(pokemonHTML)
  document.getElementById("textVeld").value = ''
  document.getElementById("textVeld2").value = ''
  nextB.classList.remove('zichtbaar')
  pokeNaam.classList.remove('zichtbaar')
  pokePlaatje.classList.remove('zichtbaar')
  div1.classList.remove('foutantwoord', 'ingevuld', 'goedantwoord')
  div2.classList.remove('foutantwoord', 'ingevuld', 'goedantwoord')
  stopConfetti();
  divArea.innerHTML = '';
  divArea.insertAdjacentHTML(
    'afterbegin',
    `<img id="plaatjePokemon" src="${pokemonHTML.sprites.front_default}" alt="Pokemon plaatje">
     <h2 id="naamPokemon">${pokemonHTML.forms[0].name}</h2>
    `)
})