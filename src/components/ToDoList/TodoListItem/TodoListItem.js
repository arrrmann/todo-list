import { Component } from 'react'
import './todo-list-item.css'
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaXmark } from 'react-icons/fa6'
import { validateInput } from '../../../utils/validator'


class TodoListItem extends Component {
    state = {
        isDone: false,
        importancy: this.props.important,
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

    onDone = () => {
        this.setState({
            isDone: !this.state.isDone
        })
    }

    onImortant = () => {
        this.setState({
            importancy: !this.state.importancy//amen popoxutyan jamanak arjeqy popoxum enq vorpeszi apahovenq hakarak funkcionalutyuny nuynpes
        })
    }


    onDelete = () => {
        const { deleteItem, identification } = this.props
        deleteItem(identification)
    }

    render() {
        const { isDone, importancy, isNowEditing, editText, isError } = this.state
        const style = {
            textDecoration: isDone ? 'line-through' : 'none',
            color: isDone ? "#aaa" : (importancy ? '#d72020' : 'black'),
            fontWeight: isDone ? "normal" : (importancy ? 'bold' : 'normal')
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
                    <button className='item-btn-done' onClick={this.onDone}><FaCheck /></button>
                    <button className='item-btn-important' onClick={this.onImortant}><FaInfo /></button>
                    <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
                </span>
            </li>
        )
    }
}

export default TodoListItem
