import Lists from "./Lists"

const ToDoList=()=>{
    const items=[
        {text:"react", important:true},
        {text:"QA", important:true},
        {text:"PM", important:false},
        {text:"Js", important:false}
    ]

    return (
        <ul>
            <Lists text={items[0].text} important={items[0].important}/>
            <Lists text={items[1].text} important={items[1].important}/>
            <Lists text={items[2].text} important={items[2].important}/>
            <Lists text={items[3].text} important={items[3].important}/>
        </ul>
    )
}

export default ToDoList