import React from 'react' 
import './instructionButton.css'

export default function instructionButton(prop){
    return (<button className='instructionButton'>{prop.character}</button>)
}