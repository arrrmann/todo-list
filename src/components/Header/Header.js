import { Component } from 'react'
import './header.css'

class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1>ToDo App<span className='info'> Done: 5 Important: 3</span></h1>
            </div>
        )
    }
}


export default Header