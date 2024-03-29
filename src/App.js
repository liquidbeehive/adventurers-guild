import './App.css';
import React, {useState } from "react";
import characterData from "./assets/character-data.json";
import CharacterItem from "./components/CharacterItem";
import FilterButton from "./components/FilterButton";

characterData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const characterList = [...new Set(characterData.map((item) => item.class))];

  const addToCartList = (character) => setCartList([...cartContent, character])
  const[cartContent, setCartList] = useState([])

  const characterItems = 
  characterData.map((item, index) => (
    <CharacterItem  
    name = {item.name} 
    class = {item.class} 
    level = {item.level}
    role = {item.role}
    // increment={increment} 
    image = {item.image} 
    addToCartList={addToCartList}/>
  ))

  const characterDataArray = [...new Array(
    characterData.map((item, index) => (
      <CharacterItem  
      name = {item.name} 
      class = {item.class} 
      level = {item.level}
      role = {item.role}
      image = {item.image}/>
    )))]
  
  // const [filteredCharacters, setFilteredCharacters] = useState(characterDataArray);

  const isFighter = (value) => value.class === "Fighter";
  const desiredoutput = characterDataArray.map(isFighter);

  const fighterList = characterDataArray.filter((character) => character.class === "Fighter")

  // const increment = (amount) => setCartPrice(cartTotal+amount)
  // const[cartTotal, setCartPrice] = useState(0)

  return (
    <div className="App">
      <div>

      <h1>Adventurer's Guild</h1>
      {characterItems}
      </div>

      <div class="cart">
      <h2>Party</h2>
        {cartContent.map((item, index) => ( 
        <p>{item}</p> 
      ))}</div>
      <div class = "filter">
          <h2>Filter</h2>
          {fighterList}
      </div>


    </div>
  );
}

export default App;
