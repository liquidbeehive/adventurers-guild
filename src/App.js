import './App.css';
import React, {useState } from "react";
import characterData from "./assets/character-data.json";
import CharacterItem from "./components/CharacterItem";

characterData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const addToCartList = (character) => setCartList([...cartContent, character])
  const[cartContent, setCartList] = useState([])

  // const increment = (amount) => setCartPrice(cartTotal+amount)
  // const[cartTotal, setCartPrice] = useState(0)

  return (
    <div className="App">
      <div>

      <h1>Adventurer's Guild</h1>

      {characterData.map((item, index) => (
        <CharacterItem  
        name = {item.name} 
        class = {item.class} 
        level = {item.level}
        role = {item.role}
        // increment={increment} 
        image = {item.image} 
        addToCartList={addToCartList}/>
      ))}</div>

      <div>
      <h2>Cart</h2>
        {cartContent.map((item, index) => ( 
        <p>{item}</p> 
      ))}</div>


    </div>
  );
}

export default App;
