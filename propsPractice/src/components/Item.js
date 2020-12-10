import React from 'react'

function Item(props){
    return(
        <div>
            <h1 style={{color: '#f00'}}>{props.item.name}</h1>
            <h2>Price: TK.{props.item.price}</h2>
            <hr width="100%"/>
        </div>
    )
}

export default Item