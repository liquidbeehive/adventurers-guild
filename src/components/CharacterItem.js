import React, {useState } from "react";

export default function CharacterItem(prop) {

  const[isInCart, setInCart] = useState(true)

  let cartbutton = <button onClick = {() => buttonAddClickFunc(prop)} >  </button>;

  if (isInCart) {
    cartbutton = <button onClick = {() => {setInCart(false);buttonAddClickFunc(prop)}} > Add to Party! </button>;
  }
  else {
    cartbutton = <button onClick = {() => {setInCart(true);buttonRemoveCLickFunc(prop)}} > Remove from Party! </button>;
  }

  function buttonAddClickFunc(prop) {
    prop.setCartList([... prop.cartContent, prop.name])
    // prop.setPartyTotal(prop)
  }

  function buttonRemoveCLickFunc(prop){
    prop.setCartList([...prop.cartContent.toSpliced(prop.cartContent.indexOf(prop.name))])  
  }

    return (
    <div className="characterTotalInformation">
      <p>
        <img className="characterPortrait" src= {prop.image} alt = {prop.name}></img>
      </p>
      <div className="characterBio">
        <p className="propName">
            {prop.name}
        </p>
        <p>
            {prop.classType} | Level {prop.level} | {prop.role}
        </p>
        <p>
          {cartbutton}
        </p>
      </div>
    </div>
    );
  }

