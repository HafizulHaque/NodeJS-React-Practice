import React,{Component} from 'react'

class App3 extends Component{
    constructor(){
        super()
    }

    mouseEventHandler(){
        console.log('mouse moved on/off the image')
    }

    render(){
        return(
            <div
                style={{
                    width: "50%",
                    margin: "0 auto",
                    textAlign: 'center'
                }}
            >
                <img 
                    src="http://placekitten.com/300/200"
                    onMouseEnter={this.mouseEventHandler}
                    onMouseLeave={this.mouseEventHandler}
                />
                <br/><br/>
                <button>Click!</button>
            </div>
        )
    }
}

export default App3