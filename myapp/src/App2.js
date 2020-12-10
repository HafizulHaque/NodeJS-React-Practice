import React from 'react'
import Cond from './components/Cond'

class App2 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            messages: [
                
            ]
        }

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: true
            })
        }, 5000)
    }

    render(){
        return(
            <div>
                <p>{this.state.messages.length>0 && `You have ${this.state.messages.length} unread messages`}</p>
                <Cond loadInfo={this.state.isLoading}/>
            </div>
        )
    }
}

export default App2