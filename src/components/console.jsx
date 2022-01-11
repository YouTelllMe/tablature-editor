import React, {useState, useEffect} from 'react'
import './consoleStyleSheet.css'
import configChange from './configChange'

export default function (props){
    
    const [code, setCode] = useState(' > ')
    const [minimized, setMinimized] = useState(false)

    function enterPressed(event){
        if (event.key==='Enter'){
            setCode(' > ')
            configChange(event, props)
        }
    }

    return (
    <div className='container'>
        <input type='text' id='console-input' style={minimized === true ? {visibility:'hidden'} : {visibility:''}} value={code} 
        onKeyPress={enterPressed}
        onChange={event=>{return event.target.value.substring(0,3)!==' > ' ? null : setCode(event.target.value)}}>
        </input>
        <button id='minimize' onClick={()=>setMinimized(previousState => !previousState)}>––</button>  
    </div>
    )
}
