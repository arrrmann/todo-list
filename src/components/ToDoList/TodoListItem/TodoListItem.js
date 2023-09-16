import { Component } from 'react'
import './todo-list-item.css'
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaXmark } from 'react-icons/fa6'
import { validateInput } from '../../../utils/validator'


class TodoListItem extends Component {
    state = {
        editText: this.props.text,
        isNowEditing: false,
        isError: false
    }//state-y stexcvac e nra hamar vor pahpani jizneniy cikly, aranc state- render-y mi angamic aveli chi ashxati, inqy ir mej tvyalner e pahum ev erb dranq poxvum en render method-y noric kanchvum e

    Edithandler = () => {
        this.setState((prevState) => {
            if(prevState.isNowEditing && !validateInput(prevState.editText)){//stugum enq ete hima chenq grum--isNowEditing=false, uremn el funkcian chkanchenq animast chstugenq, ete grum enq--isNowEditing=true, ay et jamanak nor petq e stugel
                return {
                    isError:true
                }
            }

            return {
                isNowEditing: !prevState.isNowEditing,
                isError:false,
            }
        })
    }

    InputChangeValueHandler = (event) => {
        this.setState({ editText: event.target.value })
    }

    InputValueSaver = () => {
        this.props.editItem(this.state.editText)
        this.Edithandler()
    }

    // onImportantAndonDone=()=>{
    //     this.props.onImportantAndonDone(this.props.identification, 'done')
    // }

    onDelete = () => {
        this.props.deleteItem(this.props.identification)
    }

    render() {
        const { isNowEditing, editText, isError } = this.state
        const {important, done}=this.props

        const style = {
            textDecoration: done ? 'line-through' : 'none',
            color: done ? "#aaa" : (important ? '#d72020' : 'black'),
            fontWeight: done ? "normal" : (important ? 'bold' : 'normal')
        }
        const inputStyle={
            borderColor: isError ? 'red' : '#ccc'
        }

        return (
            <li className='list-item'>
                {isNowEditing ? (
                    <>
                        <input
                            style={inputStyle}
                            className='input-for-edit'
                            type='text'
                            value={editText}
                            onChange={this.InputChangeValueHandler}
                        />
                        <button onClick={this.InputValueSaver} className='btn-for-edit'>Save</button>
                        {
                            isError ? <span className='error-message'>Can't Save or Close, Please fill the input</span>: null
                        }
                    </>
                ) : <span className='item-text' style={style} onClick={this.onDone}>
                    {editText}
                </span>
                }

                <span className='item-btns'>
                    <button onClick={this.Edithandler}>
                        { isNowEditing ? <FaXmark/> : <FaPenToSquare /> }
                    </button>
                    <button className='item-btn-done' 
                        onClick={()=>{this.props.onImportantAndonDone(this.props.identification, 'done')}}>
                        <FaCheck />
                    </button>
                    <button className='item-btn-important' 
                        onClick={()=>{this.props.onImportantAndonDone(this.props.identification, 'important')}}>
                        <FaInfo />
                    </button>
                    <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
                </span>
            </li>
        )
    }
}

export default TodoListItem
