import { Component } from "react";
import TodoListItem from "./TodoListItem";
import './todo-list.css'


class ToDoList extends Component {
    render() {
        const { items, deleteItem, editItem, onImportantAndonDone } = this.props

        const data = items.map(({ text, important, id, done }, index) => {
            return (<TodoListItem 
                text={text}
                key={id}
                identification={id}
                onImportantAndonDone={onImportantAndonDone}
                important={important}
                done={done}
                deleteItem={deleteItem}
                editItem={(newTextValue) => { editItem(index, newTextValue) }} />)
        })

        return (
            <ul className="todo-list">
                {data}
            </ul>
        )
    }
}


export default ToDoList