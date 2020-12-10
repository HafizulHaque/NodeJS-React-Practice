import React, {Component} from 'react'

class App2 extends Component{

    constructor(){
        super()
        this.state = {
            value: 0
        }
        this.handleClickFunc = this.handleClickFunc.bind(this)
        this.handleClickFunc2 = this.handleClickFunc2.bind(this)
    }
    
    handleClickFunc(){
        this.setState(function(prevState){
            return {
                value: prevState.value+1
            }
        })
    }

    handleClickFunc2(){
        this.setState(function(prevState){
            return {
                value: prevState.value-1
            }
        })
    }

    render(){
        let styles = {
            textAlign:'center'
        }
        return(
            <div style={styles}>
                <h1>{this.state.value}</h1>
                <button onClick={this.handleClickFunc}>Increase!</button><br/>
                <button onClick={this.handleClickFunc2}>Decrease!</button>
            </div>
        )
    }
}

export default App2