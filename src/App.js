import './App.css';
import React, {useEffect, useState } from "react";
import classData from "./assets/classes-data.json";
import roleData from "./assets/role-data.json";
import characterData from "./assets/character-data.json";
import CharacterItem from "./components/CharacterItem";
import FilterButton from "./components/FilterButton";
import FilterRoleButton from "./components/FilterRoleButton";

// characterData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });

function App() {

  // const characterList = [...new Set(characterData.map((item) => item.class))];

  // const addToCartList = (character) => setCartList([...cartContent, character])
  const[cartContent, setCartList] = useState([])

  const resetData = characterData

  const [filteredCharactersList, setFilteredCharacters] = useState(characterData)
  
  const handleClassFilterClick = (button) => setFilteredCharacters(resetData.filter((character) => character.classType === button.classType))
  const filterButtons = [...new Set(
    classData.map((item, index) => (
      <FilterButton
      key = {index}
      classType = {item.classType} 
      handleClick = {handleClassFilterClick}
      />
    )))]

    const handleRoleFilterClick = (button) => setFilteredCharacters(resetData.filter((character) => character.role === button.role))
    const filterRoleButtons = [...new Set(
      roleData.map((item, index) => (
      <FilterRoleButton
      key = {index}
      role = {item.role} 
      handleClick = {handleRoleFilterClick}
      />
    )))]

  function DescendingLevelOrderButton() {
    function handleDescendClick(){
      setFilteredCharacters(prev => prev.toSorted((a, b) => b.level - a.level));
    }
    return (
      <button onClick={handleDescendClick}>
        Descending
      </button>
    );
  }

  function AscendingLevelOrderButton() {
    function handleAscendClick(){
      setFilteredCharacters(prev => prev.toSorted((a, b) => a.level - b.level))

    }
    return (
      <button onClick={handleAscendClick}>
        Ascending
      </button>
    );
  }

  function ResetButton() {
    function handleResetClick(){
      setFilteredCharacters(resetData)
    }
    return (
      <button onClick={handleResetClick}>
        Reset Filters
      </button>
    );
  }





  return (
    <div className="App">
      <div>

      <h1>Adventurer's Guild</h1>
      
      {filteredCharactersList.map((item, index) => (
      <div key={index}>
        <CharacterItem  
        key = {item.name}
        name = {item.name} 
        classType = {item.classType} 
        level = {item.level}
        role = {item.role}
        image = {item.image}
        setCartList={setCartList}
        cartContent = {cartContent}
        />
      </div>
    ))}
    
      </div>

      <div className="cart">
      <h2>Party</h2>
        {cartContent.map((item, index) => ( 
      
        <p key = {index}>{item}</p> 
      ))}
      ______________
      <p>
      Total Party Members: {cartContent.length}
      </p>
      
      </div>
      <div className = "filter">
          <h2>Filter</h2>
          <div className="filterBox">
            <div className = "filterBoxContent">
              <h3>Class</h3>
              {filterButtons}
              <p>
                <h3>Role</h3>
              {filterRoleButtons}
              </p>
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
