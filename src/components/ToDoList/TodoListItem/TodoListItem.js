import { Component } from 'react'
import './todo-list-item.css'
import {FaTrash, FaInfo, FaCheck} from 'react-icons/fa6'

class TodoListItem extends Component{
    state={
        isDone:false,
        importancy:this.props.important
    }//state-y stexcvac e nra hamar vor pahpani jizneniy cikly, aranc state- render-y mi angamic aveli chi ashxati, inqy ir mej tvyalner e pahum ev erb dranq poxvum en render method-y noric kanchvum e

    onDone=()=>{
        this.setState({
            isDone: !this.state.isDone
        })
    }

    onImortant=()=>{
        this.setState({
            importancy: !this.state.importancy//amen popoxutyan jamanak arjeqy popoxum enq vorpeszi apahovenq hakarak funkcionalutyuny nuynpes
        })
    }

    onDeleteBtn=()=>{
        const {onRemoveBtn, identification}=this.props
        onRemoveBtn(identification)
    }

    render(){
        const {text,}=this.props
        const {isDone, importancy}=this.state
        const style={
            textDecoration: isDone ? 'line-through' : 'none',
            color: isDone ? "#aaa":(importancy ?'#d72020':'black'),
            fontWeight:isDone ? "normal":(importancy ?'bold':'normal')
        }

        return (
            <li className='list-item'>
            <span className='item-text' style={style} onClick={this.onDone}>
                {text}
            </span>
            <span className='item-btns'>
                <button className='item-btn-done' onClick={this.onDone}><FaCheck/></button>
                <button className='item-btn-important'onClick={this.onImortant}><FaInfo/></button>
                <button className='item-btn-remove' onClick={this.onDeleteBtn}><FaTrash/></button>
            </span>
        </li>
        )
    }
}

export default TodoListItem