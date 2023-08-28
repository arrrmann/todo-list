import TodoListItem from "./TodoListItem"

const ToDoList=()=>{
    const items=[
        {text:"react", important:true},
        {text:"QA", important:true},
        {text:"PM", important:false},
        {text:"Js", important:false},
        {text:"Node", important:true},
    ]

    const data=items.map(({text, important})=>{
        return (<TodoListItem text={text} important={important}/>)
    })

    return (
        <ul>
            {data}
        </ul>
    )
}

export default ToDoList