export default function CharacterItem(prop) {
    return (
    <div class="characterTotalInformation">
      <p>
        <img class="characterPortrait" src= {prop.image} alt = {prop.name}></img>
        <div class="characterBio">
        <p class="propName">
            {prop.name}
        </p>
        <p>
            {prop.class} | Level {prop.level} | {prop.role}
        </p>
        <p>
            <button onClick = {() => buttonClickFunc(prop)} > add to party! </button>
        </p>
        </div>
      </p>
      </div>
    );
  }

    function buttonClickFunc(prop) {
        prop.addToCartList(prop.name)
        // prop.increment(prop.price)
    }