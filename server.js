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


app.get('/', (req, res) => {
  let pokeNummer = Math.floor(Math.random() * 151);
      fetch(`https://pokeapi.co/api/v2/pokemon/`+pokeNummer+``)
        .then(response => response.json())
        .then(function (pokeData) {
          res.render('index', {
            data: pokeData
          });
        })
})

    // io.on('connection', (socket) => {
    //   console.log('a user connected')

    //   socket.on('message', (message) => {
    //     io.emit('message', message)
    //   })

    //   socket.on('disconnect', () => {
    //     console.log('user disconnected')
    //   })
    // })

    http.listen(port, () => {
      console.log('listening on port ', port)
    })