/*
Current Commands
ar = add row of measures
dr = delete row of measures
ar [number] = add [number] rows of measures
dr [number] = delete [number] rows of measures
hide = hide measure borders
show = show measure borders
.[bar].[box].[note] = changes the note
*/




export default function configChange (event, props){
    const value = event.target.value.trim()
    if (value.substring(2,4) === 'ar')
        {
            if (value.length === 4)
                {props.setConfig(prevState=>({...prevState, numbars: prevState.numbars+1}))}
            else 
                {const add = parseInt(value.substring(4,value.length))
                 props.setConfig(prevState=>({...prevState, numbars: prevState.numbars+add}))}
        }
    else if (value.substring(2,4) === 'dr')
        {
            if (value.length === 4)
                {props.setConfig(prevState=>({...prevState, numbars: prevState.numbars-1}))}
            else 
                {const sub = parseInt(value.substring(4,value.length))
                 props.setConfig(prevState=>({...prevState, numbars: prevState.numbars-sub}))}
        }

    else if (value === '> hide') 
        {
            props.setConfig(prevState => ({...prevState, hidden: true}))
        }

    else if (value === '> show') 
        {
            props.setConfig(prevState => ({...prevState, hidden: false}))
        }

    else if (value.charAt(2) === '.')
        {
            props.notesManager(value)
        }

}