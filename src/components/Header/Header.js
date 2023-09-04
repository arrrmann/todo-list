import { Component } from 'react'//Component-y class e
import './header.css'

class Header extends Component{
    render(){
        const {done, important}=this.props//this.props-y hasaneli e class-i mej amen tex,   ayn arajacel e erb menq jarangvel enq Component class-ic
        return (
            <div className="header">
                <h1>ToDo App<span className='info'> Done: {done} Important: {important}</span></h1>
            </div>
        )
    }
}


export default Header