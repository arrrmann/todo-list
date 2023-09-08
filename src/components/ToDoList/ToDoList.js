import { Component } from "react";
import TodoListItem from "./TodoListItem";
import './todo-list.css'


class ToDoList extends Component{
    render(){
        const {items, deleteItem, editItem}=this.props

        const data=items.map(({text, important, id},index)=>{
            return (<TodoListItem text={text} important={important} key={id} identification={id} deleteItem={deleteItem} editItem={(newTextValue)=>{editItem(index, newTextValue)}}/>)
        })

        return (
            <ul className="todo-list">
                {data}
            </ul>
        )
    }
}


export default ToDoList