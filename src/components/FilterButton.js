
export default function FilterButton(prop) {
    return (
    <div className="filterButton">
        <button onClick = {() => buttonClickFunc(prop)} > {prop.classType} </button>
    </div>
    );
  }

function buttonClickFunc(prop) {
    prop.handleClick(prop)
}