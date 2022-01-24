import {useState} from "react";
import React from "react";

function Picture(props){
    const pic = props.source
    const [image, setImage] = useState(pic)

    return (
        <img src={image} alt='meme'/>
    )
}

export default Picture;