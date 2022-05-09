
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









![datamodel](https://user-images.githubusercontent.com/43068118/165272617-6afd4223-867e-47fa-8d16-407d7dc80efe.jpg)
