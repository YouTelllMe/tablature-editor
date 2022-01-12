import React, {useState, useEffect} from 'react'
import './consoleStyleSheet.css'
import configChange from './configChange'

export default function (props){
    
    const [code, setCode] = useState(' > ')
    const [minimized, setMinimized] = useState(false)

    function enterPressed(event){
        if (event.key==='Enter'){
            let copy = {...props.config}
            setCode(' > ')
            const codes = event.target.value.trim().split(' ')
            const codes1 = codes.shift()

            console.log(codes)

            for (const i of codes){
                const code = configChange(i, props)
                console.log(code)
                if (code.hasOwnProperty('masterNotes')){
                    const key1 = parseInt(Object.keys(code.masterNotes)[0])
                    if (code.masterNotes[key1] === 'delete'){
                        copy.masterNotes[key1] = {1:'nnnnnn'}
                    }
                    else{
                        const key2 = parseInt(Object.keys(code.masterNotes[key1])[0])
                        if (code.masterNotes[key1][key2] === 'delete'){
                            delete copy.masterNotes[key1][key2]
                        }
                        else{
                        if (copy.masterNotes[key1] === undefined){
                            copy.masterNotes[key1] = {}
                        }
                        copy.masterNotes[key1][key2] = code.masterNotes[key1][key2]}}
                    }
                else{
                    const key1 = Object.keys(code)[0]
                    copy = {...copy, [key1]: code[key1]}
                    }
                }
            
            props.setConfig(copy)
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
