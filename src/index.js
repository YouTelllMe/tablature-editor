import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Box from './components/box.jsx'
import Bar from './components/bar.jsx'
import Console from './components/console.jsx'
import InstructionButton from './components/instructionButton.jsx'
import './App.css'



function App () {

    const [config, setConfig] = useState({numbars:4, hidden: false, masterNotes: {1:{1:'nnnnnn'},2:{1:'nnnnnn'}}})
    const bars = []

    for (let i = 1; i<(config.numbars)*2; i+=2) {bars.push(i)}
    const renderBars = bars.map(value=> <Bar key={value} notes1={config.masterNotes[value]} notes2={config.masterNotes[value+1]} index={value} hidden={config.hidden}/>)
    
    return (
        <div>  
            <Box type='text' placeholder='Untitled Tabs' style={{marginTop: '10px', marginLeft:'30%', fontSize: '40pt'}}/>
            <div id = 'timesig'>
                <p style={{marginLeft:'250px',marginRight:'10px', fontWeight: 'bold', color: 'rgba(0,0,0,0.7)'}}>Time Signature :</p>
                    <div>
                        <Box type='number' placeholder='4' style={{width: '25px'}}/>
                        <Box type='number' placeholder='4' style={{width: '25px'}}/>
                    </div>
                <InstructionButton/>
            </div>
            {renderBars}
            <Console config= {config} setConfig={(config)=>setConfig(config)}/>
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))