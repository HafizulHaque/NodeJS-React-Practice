import React from 'react'
import Mydiv from './components/Mydiv'

class App extends React.Component{
    render(){
        return(
            <div>
                <Mydiv name="Shanto"/>
                <Mydiv name="Simran"/>
                <Mydiv name="Mashfi"/>
                <Mydiv name="Nusrat"/>
            </div>
        )
    }
}

export default App