import './search.css'

const Search=()=>{
    return (
        <div className="search">
            <input type="text" placeholder="Type for search"/>
            <button className='btn-all'>All</button>
            <button className='btn-done'>Done</button>
            <button className='btn-important'>Important</button>
        </div>
    )
}  

export default Search