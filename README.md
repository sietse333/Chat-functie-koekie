
# Pokeguesser

## App description

Pokeguesser is a game where you and one friend can test your Pokemon knowledge against each other. When you both got the answer right you get a little suprise :)

## Concepts

First concept is a app where you can guess art from Rijksmusseum. I already had a Rijksmusseum project so it would be a convenient choice but i wanted to challenge myself a bit for this project. The one under that one is the pokeguesser app which i ended up chosing. Last one is a rating app for quotes from the quote api. I thought it was kinda boring so i didnt end up choosing it

![Wireflow1realtime](https://user-images.githubusercontent.com/43068118/165269342-7473c453-d7a2-4b18-8f07-dab593e3d488.jpg)

![wirereal](https://user-images.githubusercontent.com/43068118/165269323-a2a5b1ef-ebcb-4627-8fe6-ba7eeb580fd1.png)

## What does this app do?

### Features

- You can play with people
- Players can guess the pokemon which is hidden behind a black silhouette
- When you guess wrong your playfield gets red. When you guess right it goes green.
- When both players guess right you get a confetti suprise
- When both players have guessed you get a button so you can go to the next pokemon

### API features

- Fetch and show a pokemon
- Fetch and show the pokemons name
- Check if the guesses are right

## MoSCoW 9-5-2022

Must haves:
- Make sure both players see the same Pokemon
- Create left side for only player 1 and right side for only player 2

Should haves:
- Chat function

Could haves:
- Send emoticons to each other for a quick chat function
- Points system

Wont haves:
- Choosing what pokemon generation you want to play
- Vote function for that generation to be able to change mid game
- Ranked function
- Log in that remembers your points

## API

### What API did i use?

I used the Pokeapi for this project. Here is the link if you want to check it out yourself! https://pokeapi.co/

### API response

When you call the API with https://pokeapi.co/api/v2/pokemon you get a bunch of pokemon. However i want the detailed version of the pokemons and not just the name. So you can use https://pokeapi.co/api/v2/pokemon/52 for example. With the number right behind it it chooses the number 52 pokemon in the pokedex which is nidorina. Knowing this i fetch with a random number generator added to the back of the link like this:

```
let pokeNummer = Math.floor(Math.random() * 151);
return fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNummer + ``)
```

This gives me a whole list of information about this one pokemon as you can see here. And i added the 151 at the end so it only chooses the orgininal 151 pokemon from red and blue. Because those are my favorites.


![image](https://user-images.githubusercontent.com/43068118/167409208-2070b072-d204-4421-86c2-0a3548ace2a8.png)


Now i can use that to get what i need which are the sprite and the name of the pokemon. A sprite is just an image of the pokemon. Here is how i do it:

```
<img id="plaatjePokemon" src="<%- data.sprites.front_default %>" alt="Pokemon plaatje">
<h2 id="naamPokemon"><%- data.forms[0].name %></h2>
```

## Real-time events



### Used packages

#### Ejs

Ejs is a templating package which lets you mix javascript and html in the same file. I find this really helpful and it makes the whole project a little more easy to read. 

```
npm install ejs
```
```
app.set('view engine', 'ejs');
```

https://www.npmjs.com/package/ejs

#### Express

Express is a framework package and it helps you with the routing in your application. You can use it like this for example to load up your home page:
```
app.get('/', (req, res) => {
  res.send('hello world')
})
```
```
npm install express
```
```
const express = require('express')
```

https://expressjs.com/en/starter/installing.html

#### Node-fetch

Node-fetch is a must have package which lets you use fetch requests on the server side. Not really much to say here :P

```
npm install node-fetch
```
```
const fetch = require('node-fetch')
```

https://www.npmjs.com/package//node-fetch

#### Socket.io

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. Simply said its helps you make a lasting connection to other people in your application. I need this in my app so the 2 players see the same pokemon and guess on it too.

```
npm install socket.io
```
```
const io = require('socket.io')(http)
```
```
let socket = io()
```

https://www.npmjs.com/package/socket.io

#### Nodemon

Nodemon is a really helpful package which lets you make changes to your node based application without you having to restart it all the time. Nodemon does that itself so you can just focus on your work.
```
npm install -g nodemon
```
https://www.npmjs.com/package/nodemon

## How to install?

### Clone this repo

You can clone it by opening my repo with Github desktop or you can use this link yo clone it https://github.com/sietse333/Pokeguesser-antonio.git

### Install the packages

This project uses a few packages so by typing in ``` npm install ``` in your terminal you install all the packages i have used in this project

### Start the server

You can start the server by typing ``` npm run start ``` in your terminal. Now your local server is running.

### Now to go to the page

You can go to the page by typing in this link in your browser of choice:

```
https://localhost:1234/
```

## Data model

A data model i made where i show you how i navigate the results from the api fetch. However i now skip the first 2 tables by using the random number generator at the end of the call.

![datamodel](https://user-images.githubusercontent.com/43068118/165272617-6afd4223-867e-47fa-8d16-407d7dc80efe.jpg)
