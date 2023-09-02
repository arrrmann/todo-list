import TodoListItem from "./TodoListItem/TodoListItem";
import './todo-list.css'

const ToDoList=({items})=>{

    const data=items.map(({text, important, id})=>{
        return (<TodoListItem text={text} important={important} key={id}/>)
    }) 

    return (
        <ul className="todo-list">
            {data}
        </ul>
    )
}

export default ToDoList