import React, {Component} from 'react'

class App extends Component{

    constructor(){
        super()
        this.state = {
            name: "shanto",
            loggedIn: false
        }
    }


    render(){
        return (
            <div>
                <p>hello {this.state.name}!</p>
                {/* {this.props.loggedIn = false} */}
                <p>Logged {this.state.loggedIn ? "in": "out"}</p>
            </div>
        )
    }
}

export default App