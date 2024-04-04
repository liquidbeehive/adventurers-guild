export default function FilterRoleButton(prop) {
    function buttonClickFunc(prop) {
        prop.handleClick(prop)
    }

    return (
    <div className="filterButton">
        <button onClick = {() => buttonClickFunc(prop)} > {prop.role} </button>
    </div>
    );
}