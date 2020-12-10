import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App extends React.Component{
    constructor(){
        super()
        this.state =
        {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        const newState = this.state.todos.map(todo => {
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState(prevState => {
            return{
                todos: newState
            }
        })
    }


    render(){
        const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>)
        return(
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App
