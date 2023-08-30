import Button from "../Button/Button.js";
import './add-item.css'

const AddItem=()=>{
    return (
        <div className="add-item">
            <input type="text" placeholder="Item text"/>
            <Button text="Add item" color="rgb(55, 55, 118)"/>
        </div>
    )
}

export default AddItem