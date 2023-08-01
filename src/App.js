import React, {useState} from 'react'
import Home from './Home.js'
import Documentation from './Documentation.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


export default function App () {

    const [config, setConfig] = useState({numbars:4, hidden: false, masterNotes: {1:{1:'nnnnnn'},2:{1:'nnnnnn'}}})

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home config={config} setConfig={(config)=>setConfig(config)}/>}/>
                <Route path='/documentation' element={<Documentation/>}/>
            </Routes>
        </Router>    
        )
}
