import './todo-list-item.css'
import Button from '../../Button/Button'

const TodoListItem=({text, important})=>{
    const style={
        color: important ? "red":"black"
    }
    return (
        <div>
            <div className='wrapper'>
                <li className='todo-list-item' style={style}>{text}</li>
                <Button text="Delete"/>
                <Button text="Change"/>
                <Button text="Edit"/>
            </div>
        </div>
    ) 
}

export default TodoListItem