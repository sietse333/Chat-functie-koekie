const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 1234
const fetch = require('node-fetch')

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

app.use(express.static(path.resolve('public')))


// IK MOET DIT VERWERKEN IN DE SERVER STARTup WANT HET WILT GETPOKEMON() KRIJGEN
let currentPokemon = null
app.get('/', async (req, res) => {
  if (!currentPokemon) {
    currentPokemon = await getPokemon()
  }
  res.render('index', {
    data: currentPokemon
  });
})

// oude function doe ik nu in script

function getPokemon() {
  let pokeNummer = Math.floor(Math.random() * 151);
  return fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNummer + ``)
    .then(response => response.json())
}

io.on('connection', (socket) => {
  console.log('a user connected')

  // Function die ik probeer aan te roepen via me script
  socket.on('refreshPokemon', () => {
    getPokemon().then(response => {
      socket.emit('pokemonHTML', response)
    })
  })


  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})


// Oude manier van renderen

// app.get('/', (req, res) => {
//   let pokeNummer = Math.floor(Math.random() * 151);
//       fetch(`https://pokeapi.co/api/v2/pokemon/`+pokeNummer+``)
//         .then(response => response.json())
//         .then(function (pokeData) {
//           res.render('index', {
//             data: pokeData
//           });
//         })
// })