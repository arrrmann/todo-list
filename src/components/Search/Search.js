import Button from "../Button/Button";
import './search.css'

const Search=()=>{
    return (
        <div className="search">
            <input type="text" placeholder="Type for search"/>
            <Button text="Click here" color="rgb(55, 55, 118)"/>
        </div>
    )
}  

export default Search