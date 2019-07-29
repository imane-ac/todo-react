import React from "react"
import TodoItem from "./TodoItem"
import todosDate from "./todosData"

class App extends React.Component{
    constructor(){
        super()
        this.state = { todos : todosDate}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        /*this.setState(prevState =>{
            return{
                prevState.todos.map(item=>{})
            }
        })*/
        console.log("Changed item", id)
    }
    render(){
        const toDoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);

        return(
            <div className="todo-list">
                {toDoItems}
            </div>
        )
    }
}

export default App;