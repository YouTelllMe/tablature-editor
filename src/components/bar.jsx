import React from 'react'
import './barStyleSheet.css'


export default function Bar(props) {
    const index = props.index
    const index2 = props.index+1
    const space = String.fromCharCode(160)

    function createNote (notes, hidden) {

        if (hidden === true && notes === undefined){            
            return (<div className='note' style={{border:'none',boxShadow: 'none'}}>
                        <h5 className='e'>{space}</h5>
                        <h5 className='b'>{space}</h5>
                        <h5 className='g'>{space}</h5>
                        <h5 className='d'>{space}</h5>
                        <h5 className='a'>{space}</h5>
                        <h5 className='E'>{space}</h5>
                    </div>)}
        

        else if (notes === undefined){
            return (
                <div className='note'>
                    <h5 className='e'>{space}</h5>
                    <h5 className='b'>{space}</h5>
                    <h5 className='g'>{space}</h5>
                    <h5 className='d'>{space}</h5>
                    <h5 className='a'>{space}</h5>
                    <h5 className='E'>{space}</h5>
                    <h6 className='index'>1</h6>
                </div>
            )
        }
        
        else if (hidden===true){
            const barnotes = Object.values(notes).map((value,index)=>{
            return (
            <div className='note' key={index} style={{border:'none',boxShadow: 'none'}}>
                    <h5 className='e'>{value.charAt(0) === 'n' ? space : value.charAt(0)}</h5>
                    <h5 className='b'>{value.charAt(1) === 'n' ? space : value.charAt(1)}</h5>
                    <h5 className='g'>{value.charAt(2) === 'n' ? space : value.charAt(2)}</h5>
                    <h5 className='d'>{value.charAt(3) === 'n' ? space : value.charAt(3)}</h5>
                    <h5 className='a'>{value.charAt(4) === 'n' ? space : value.charAt(4)}</h5>
                    <h5 className='E'>{value.charAt(5) === 'n' ? space : value.charAt(5)}</h5>
            </div>)})
        
        return barnotes
        }
        
        else{
            const barindex = Object.keys(notes)
            const barnotes = Object.values(notes).map((value,index)=>{
            return (
            <div className='note' key={index}>
                    <h5 className='e'>{value.charAt(0) === 'n' ? space : value.charAt(0)}</h5>
                    <h5 className='b'>{value.charAt(1) === 'n' ? space : value.charAt(1)}</h5>
                    <h5 className='g'>{value.charAt(2) === 'n' ? space : value.charAt(2)}</h5>
                    <h5 className='d'>{value.charAt(3) === 'n' ? space : value.charAt(3)}</h5>
                    <h5 className='a'>{value.charAt(4) === 'n' ? space : value.charAt(4)}</h5>
                    <h5 className='E'>{value.charAt(5) === 'n' ? space : value.charAt(5)}</h5>
                    <h6 className='index'>{barindex[index]}</h6>
            </div>
            )})
        
        return barnotes}
    
    }

    return (
        <div>
            <div id='econtainer'>
                <div id='dcontainer'>
                    <h6 id='index'>{index}</h6>
                    <h6 id='index2'>{index2}</h6>
                </div>
            </div>
        
            <div id='bcontainer'>
                <h3>T<br></br>A<br></br>B</h3>
                <div id='ccontainer'>
                    <h6 id='e'>
                        e
                    </h6>
                    <h6 id='b'>
                        b
                    </h6>
                    <h6 id='g'>
                        g
                    </h6>
                    <h6 id='d'>
                        d
                    </h6>
                    <h6 id='a'>
                        a
                    </h6>
                    <h6 id='E'>
                        E
                    </h6>
                </div>
                    <div id='container'>
                        <div className='notes-container'>
                            {createNote(props.notes1, props.hidden)}
                        </div>
                        <div className='notes-container'>
                            {createNote(props.notes2, props.hidden)}
                        </div>
                        <div id='bar'></div>
                        <div id='string'></div>
                        <div id='string2'></div>
                        <div id='string3'></div>
                        <div id='string4'></div>
                    </div>
            </div>
        </div>
)
}