import React,{Component} from 'react'

import Item from './components/Item'
import ItemList from './components/ItemList'

class App extends Component{
    constructor(){
        super()
        this.state = {
            items: ItemList
        }
        this.myEventHandler = this.myEventHandler.bind(this)
    }

    myEventHandler(id){
        const newState = this.state.items.map(item => {
            if(item.id===id){
                item.available = !item.available
            }
            return item
        })
        this.setState(prevState => {
            return{
                items: newState
            }
        })
    }

    render(){
        const itemSet = this.state.items.map(item => <Item key={item.id} attr={item} handleEvent={this.myEventHandler}/>)
        return(
            <div>
                {itemSet}
            </div>
        )
    }
}

export default App