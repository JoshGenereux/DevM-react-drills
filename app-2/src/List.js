import {useState} from "react";
import React from "react";

const List = () =>{
    const [list, setList] = useState(
        ['spaghetti', 'ice cream', 'sushi','bologna','cheese','pizza','broccoli','tea']
    )

    return (
        <ul>
            {list.map((e,i) => <li key={i}>{e}</li>)}
        </ul>
    )
}

export default List;