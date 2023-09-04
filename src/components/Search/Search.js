import { Component } from 'react'
import './search.css'


export default class Search extends Component{
    render(){
        return (
            <div className="search">
                <input type="text" placeholder="Type for search"/>
                <button className='btn-all'>All</button>
                <button className='btn-done'>Done</button>
                <button className='btn-important'>Important</button>
            </div>
        )
    }
}

//Class kampanyentner-y kareli e miangamic export anel haytararelu jamanak