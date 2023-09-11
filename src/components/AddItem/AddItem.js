import { Component } from 'react'
// import ErrorMessage from "../ErrorMessage";
import './add-item.css'
import ErrorMessage from '../ErrorMessage'
import {validateInput} from '../../utils/validator'

class AddItem extends Component{
    state={
        inputValue: '',
        isError:false
    }

    onInputChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    onBtnChange=()=>{
        if(!validateInput(this.state.inputValue)){
            this.setState({ isError:true })
            return
        }

        this.setState({ isError:false })
        this.props.onAddItem(this.state.inputValue)
        this.setState({inputValue: ''})//verjin 2 setState-y kareli e xmbavorel mi texum
    }

    render(){
        const {isError}=this.state

        return (
            <div className="add-item">
                {
                    isError ? <ErrorMessage message="Can't Add or Close, Please fill the input" type='error'/> : null
                }

                <input type="text" 
                value={this.state.inputValue} //Btn-i click-i jamanak value-n kzroyacvi qani vor value-in tvel enq this.state.inputValue-n
                placeholder="Item text" 
                onChange={this.onInputChange}
                />
                <button onClick={this.onBtnChange}>Add item</button>
            </div>
        )
    }
}


export default AddItem