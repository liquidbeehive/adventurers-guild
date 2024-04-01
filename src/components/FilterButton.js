// // import characterData from "src/assets/character-data.json"


export default function FilterButton(prop) {
    return (
    <div class="filterButton">
        <button onClick = {() => buttonClickFunc(prop)} > {prop.class} </button>
    </div>
    );
  }




function buttonClickFunc(prop) {
    prop.handleClick(prop)
}








// const Buttons = ({setItem, characterList}) => {
//     return(
//         <>
//         {characterList.map((Val, role) =>{
//             return (
//                 <button key = {role}>
//                     {Val}
//                 </button>
//             )
//         }
//         )}
//         </>
//     )

// }

