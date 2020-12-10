import React from 'react'

class App3 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(){
        this.setState(prevState => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.isLoggedIn ? "Logged In":"Logged Out"}</h1>
                <button onClick={this.clickHandle}>{this.state.isLoggedIn ? "Log out":"Log in"}</button>
            </div>
        )
    }
}

export default App3