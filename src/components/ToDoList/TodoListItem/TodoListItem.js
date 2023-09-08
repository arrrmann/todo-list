import { Component } from 'react'
import './todo-list-item.css'
import { FaTrash, FaInfo, FaCheck, FaPenToSquare } from 'react-icons/fa6'

class TodoListItem extends Component {
    state = {
        isDone: false,
        importancy: this.props.important,
        editText: this.props.text,
        isNowEditing: false
    }//state-y stexcvac e nra hamar vor pahpani jizneniy cikly, aranc state- render-y mi angamic aveli chi ashxati, inqy ir mej tvyalner e pahum ev erb dranq poxvum en render method-y noric kanchvum e

    Edithandler = () => {
        this.setState((prevState) => ({
            isNowEditing: !prevState.isNowEditing
        }))
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
        const { text } = this.props
        const { isDone, importancy, isNowEditing, editText } = this.state
        const style = {
            textDecoration: isDone ? 'line-through' : 'none',
            color: isDone ? "#aaa" : (importancy ? '#d72020' : 'black'),
            fontWeight: isDone ? "normal" : (importancy ? 'bold' : 'normal')
        }

        return (
            <li className='list-item'>
                {isNowEditing ? (
                    <>
                        <input
                            className='input-for-save'
                            type='text'
                            value={editText}
                            onChange={this.InputChangeValueHandler}
                        />
                        <button onClick={this.InputValueSaver} className='btn-for-save'>Save</button>
                    </>
                ) : <span className='item-text' style={style} onClick={this.onDone}>
                    {text}
                </span>
                }

                <span className='item-btns'>
                    <button onClick={this.Edithandler}><FaPenToSquare /></button>
                    <button className='item-btn-done' onClick={this.onDone}><FaCheck /></button>
                    <button className='item-btn-important' onClick={this.onImortant}><FaInfo /></button>
                    <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
                </span>
            </li>
        )
    }
}

export default TodoListItem
