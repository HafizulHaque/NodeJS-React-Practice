import React from 'react'

function Joke(props){
    return(
    <div>
        <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
        <p style={{color: !props.question && "#456"}}>Answer: {props.punchLine}</p>
        <hr width="100%"/>
    </div>
    )
}

export default Joke