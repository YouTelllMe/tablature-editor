
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




export default function configChange (value, props){

    // const valueBySpace = value.split(' ')
    // console.log(valueBySpace)

    // if (valueBySpace.length-1>2){
    //     const commands = valueBySpace.shift()
    //     for (const i of valueBySpace) {
    //         if (i !== '') configChange(i, props)
    //     }
    // }

    if (value.substring(0,2) === 'ar')
        {
            if (value.length === 2)
                return ({numbars: props.config.numbars+1})
            else 
                {const add = parseInt(value.substring(2,value.length))
                return ({numbars: props.config.numbars+add})}
        }
    else if (value.substring(0,2) === 'dr')
        {
            if (value.length === 2)
            return ({numbars: props.config.numbars-1})
            else 
                {const sub = parseInt(value.substring(2,value.length))
                    return ({numbars: props.config.numbars-sub})}}

    else if (value === 'hide') 
        {
            return ({hidden: true})
        }

    else if (value === 'show') 
        {
            return ({hidden: false})
        }

    else if (value.charAt(0) === '.')
        {
            const content = value.split('.')
            const index1 = parseInt(content[1])
            const index2 = parseInt(content[2])
    
            if (content[3].trim() === 'clear') { return ({ masterNotes: {[index1]:{[index2]:'nnnnnn'}}})}
            else {return({ masterNotes:{[index1]:{[index2]:content[3]}}})}
        }

    else if (value.substring(0,3) === 'del') 
        {
            const content = value.split('.')
            if (content.length === 2) {
                const index1 = parseInt(content[1])
                return ({masterNotes:{[index1]: 'delete'}})
            }
            else if (content.length === 3 && content[2]!==''){
                const index1 = parseInt(content[1])
                const index2 = parseInt(content[2])
                return ({masterNotes:{[index1]: {[index2]:'delete'}}})
            }
        }

}