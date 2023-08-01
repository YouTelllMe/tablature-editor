import React from 'react'

export default function Image(props){
    return (
        <img src={require('./images/'+props.name+'.png')} className='image'/>
        )
}