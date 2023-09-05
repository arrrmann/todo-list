import { Component } from 'react'
// import ErrorMessage from "../ErrorMessage";
import './add-item.css'

class AddItem extends Component{
    state={
        inputValue: ''
    }

    onInputChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    onBtnChange=()=>{
        this.props.onAddItem(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return (
            <div className="add-item">
                <input type="text" value={this.state.inputValue} placeholder="Item text" onChange={this.onInputChange}/>
                <button onClick={this.onBtnChange}>Add item</button>
            </div>
        )
    }
}


export default AddItem