import React from 'react'
import ContactCard from './components/ContactCard'

function App(){
    return(
        <div>
            <ContactCard detail={{name:"Picture One", imageUrl: "http://placekitten.com/300/200", cost: "2000"}}/>
            <ContactCard detail={{name:"Picture Two", imageUrl: "http://placekitten.com/400/200", cost: "3000"}}/>
            <ContactCard detail={{name:"Picture Three", imageUrl: "http://placekitten.com/300/400", cost: "2400"}}/>
            <ContactCard detail={{name:"Picture Four", imageUrl: "http://placekitten.com/100/100", cost: "1300"}}/>
            
        </div>
    )
}

export default App