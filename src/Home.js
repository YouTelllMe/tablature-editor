import React, {useState} from 'react'
import Box from './components/box.jsx'
import Bar from './components/bar.jsx'
import Console from './components/console.jsx'
import InstructionButton from './components/instructionButton.jsx'
import './Home.css'
import { Link } from 'react-router-dom'


export default function App (props) {

    const bars = []

    for (let i = 1; i<(props.config.numbars)*2; i+=2) {bars.push(i)}
    const renderBars = bars.map(value=> <Bar key={value} notes1={props.config.masterNotes[value]} notes2={props.config.masterNotes[value+1]} index={value} hidden={props.config.hidden}/>)
    
    return (
            <div id='app'>  
                    <Box type='text' placeholder='Untitled Tabs' style={{marginTop: '10px', marginLeft:'30%', fontSize: '40pt'}}/>
                    <div id = 'timesig'>
                        <p style={{marginLeft:'250px',marginRight:'10px', fontWeight: 'bold', color: 'rgba(0,0,0,0.7)'}}>Time Signature :</p>
                            <div>
                                <Box type='number' placeholder='4' style={{width: '25px'}}/>
                                <Box type='number' placeholder='4' style={{width: '25px'}}/>
                            </div>
                        <Link to={{pathname: '/documentation'}}>
                            <InstructionButton character='?'/>
                        </Link>
                    </div>
                    <br></br>
                    {renderBars}
                    <Console config= {props.config} setConfig={(config)=>props.setConfig(config)}/>
            </div>
        )
}
