import React, {useState} from 'react'
import './boxStyleSheet.css'


export default function Box(props) {

    const [title, setTitle] = useState('')

    function titleChange(event) {
        setTitle(event.target.value)
    }

    return (
    <div>
        <input type={props.type} style={props.style} placeholder={props.placeholder} className ='box' value={title} onChange={titleChange}></input>
    </div>)
}

