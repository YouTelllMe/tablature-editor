import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Box from './components/box.jsx'
import Bar from './components/bar.jsx'
import Console from './components/console.jsx'
import InstructionButton from './components/instructionButton.jsx'
import './App.css'



function App () {

    const [config, setConfig] = useState({numbars:4, hidden: false})
    const bars = []
    const [masterNotes, setMasterNotes] = useState({
        1:{1:'nnnnnn'},
        2:{1:'nnnnnn'}
    })

    for (let i = 1; i<(config.numbars)*2; i+=2) {bars.push(i)}
    const renderBars = bars.map(value=> <Bar key={value} notes1={masterNotes[value]} notes2={masterNotes[value+1]} index={value} hidden={config.hidden}/>)
    
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
            <Console setConfig={(config)=>setConfig(config)} setMasterNotes={(note)=>setMasterNotes(note)}/>
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))