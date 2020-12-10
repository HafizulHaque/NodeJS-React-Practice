import React from 'react'

function ContactCard(props){
    console.log(props)
    return(
        <div>
            <h1>{props.detail.name}</h1>
            <img src={props.detail.imageUrl} alt=""/>
            <h2>Cost: {props.detail.cost}</h2>
            <hr width="100%"/>
        </div>
    )
}

export default ContactCard