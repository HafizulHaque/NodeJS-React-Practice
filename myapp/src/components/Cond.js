import React from 'react'

function Cond(props){
    let displayInfo = props.loadInfo? "Data Loaded :)" : "Loadig Data...."
    return(
        <div>
            <header>some Header</header>
            {displayInfo}
            <footer>Some footer</footer>
        </div>
    )
}

export default Cond