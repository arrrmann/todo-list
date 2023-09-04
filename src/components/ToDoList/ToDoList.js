import { Component } from "react";
import TodoListItem from "./TodoListItem";
import './todo-list.css'


class ToDoList extends Component{
    render(){
        const {items}=this.props

        const data=items.map(({text, important, id})=>{
            return (<TodoListItem text={text} important={important} key={id}/>)
        })

        return (
            <ul className="todo-list">
                {data}
            </ul>
        )
    }
}


export default ToDoList