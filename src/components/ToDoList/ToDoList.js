import TodoListItem from "./TodoListItem/TodoListItem";
import './todo-list.css'

const ToDoList=()=>{
    const items=[
        {text:"react", important:true, id:1},
        {text:"QA", important:true, id:2},
        {text:"PM", important:false, id:3},
        {text:"Js", important:false, id:4},
        {text:"Node", important:true, id:5},
    ]

    const data=items.map(({text, important, id})=>{
        return (<TodoListItem text={text} important={important} key={id}/>)
    })

    return (
        <ul>
            {data}
        </ul>
    )
}

export default ToDoList