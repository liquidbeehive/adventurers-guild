import './App.css';
import React, {useState } from "react";
import characterData from "./assets/character-data.json";
import CharacterItem from "./components/CharacterItem";
import FilterButton from "./components/FilterButton";

characterData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  // const characterList = [...new Set(characterData.map((item) => item.class))];

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

  const characterDataArray = [...new Set(
    characterData.map((item, index) => (
      <CharacterItem  
      key = {item.name}
      name = {item.name} 
      class = {item.class} 
      level = {item.level}
      role = {item.role}
      image = {item.image}
      addToCartList={addToCartList}/>
    )))]

  
  // const [filteredCharactersList, setFilteredCharacters] = useState(characterDataArray)
  // const displayedList = filteredCharactersList
  // .map((character) =>
  // (<div key = {character.props.name}>
  //   {character}
  // </div>))

  // const fighterFilter = filteredCharactersList.filter((character) => character.props.class === "Fighter")
  // this.setState({characters:fighterFilter})

  // const increment = (amount) => setCartPrice(cartTotal+amount)
  // const[cartTotal, setCartPrice] = useState(0)


//testing just fighters
  const [filteredCharactersList, setFilteredCharacters] = useState(characterDataArray)

  function FighterButton() {
    function handleClick(){
      setFilteredCharacters(filteredCharactersList.filter((character) => character.props.class === "Fighter"))
    }
    return (
      <button onClick={handleClick}>
        Fighters
      </button>
    );
  }

  //@LENA: THIS IS THE ONE NEEDING TO BE FIXED

  const handleClassFilterClick = (button) => setFilteredCharacters(characterDataArray.filter((character) => character.props.class === button.class))

  const filterButtons = 
  characterData.map((item) => (
    <FilterButton
    name = {item.class}
    class = {item.class} 
    handleClick = {handleClassFilterClick}
    />
  ))

  // const [sortBy, setSortBy] = useState("all")

  function DescendingLevelOrderButton() {
    function handleClick(){
      setFilteredCharacters(filteredCharactersList.sort((a, b) => b.props.level - a.props.level));
    }
    return (
      <button onClick={handleClick}>
        Descending
      </button>
    );
  }

  function AscendingLevelOrderButton() {
    function handleClick(){
      setFilteredCharacters(filteredCharactersList.sort((a, b) => a.props.level - b.props.level));
    }
    return (
      <button onClick={handleClick}>
        Ascending
      </button>
    );
  }

  function ResetButton() {
    function handleClick(){
      setFilteredCharacters(characterDataArray);
    }
    return (
      <button onClick={handleClick}>
        Reset Filters
      </button>
    );
  }





  return (
    <div className="App">
      <div>

      <h1>Adventurer's Guild</h1>
      {filteredCharactersList}
      </div>

      <div class="cart">
      <h2>Party</h2>
        {cartContent.map((item, index) => ( 
        <p>{item}</p> 
      ))}</div>
      <div class = "filter">
          <h2>Filter</h2>
          <div class="filterBox">
            <div class = "filterBoxContent">
              <h3>Class</h3>
              <FighterButton/>
              {filterButtons}
              <h3>Sort by Level</h3>
              {<AscendingLevelOrderButton/>}
              {<DescendingLevelOrderButton/>}
              <h3>Reset</h3>
              {<ResetButton/>}
            </div>
        </div>
      </div>


    </div>
  );
}

export default App;
