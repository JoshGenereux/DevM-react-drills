import {useState} from "react";
import React from "react";

const List = () =>{
    const strings = ['spaghetti', 'ice cream', 'sushi','bologna','cheese','pizza','broccoli','tea'
    , 'matcha', 'coffee,', 'fettuccine alfredo', 'water', 'beer', 'bread', 'sourdough']
    const [list, setList] = useState(strings)
    const [input, setInput] = useState('')

    const handleChange = (e) =>{
        e.preventDefault()
        let user = e.target.value;
        console.log(user)
        setInput(user)

        let array = strings.filter((element)=>{
            return element.includes(input)
        })
        setList(array)
    }

    return (
        <form>
            <input onChange={(e)=>handleChange(e)}/>
            <ul>
                {list.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
        </form>
    )
}

export default List;