import { Component } from 'react'
import './search.css'


export default class Search extends Component{
    state={
        term: ''
    }

    buttons=[
        {name:'all', text:'All', className:'btn-all' },
        {name:'done', text:'Done', className:'btn-done' },
        {name:'important', text:'Important', className:'btn-important' },
    ]

    onSearchChange=(e)=>{
        this.setState({
            term: e.target.value
        })
        this.props.onSearch(e.target.value)
    }


    render(){
        return (
            <div className="search">
                <input type="text"
                placeholder="Type for search"
                value={this.state.term}
                onChange={this.onSearchChange}
                />
                {
                    this.buttons.map(({name, text, className})=>{
                        return <button className={className} 
                        key={name} 
                        onClick={()=>{this.props.onFilterChange(name)}}
                        >
                            {text}
                        </button>
                    })
                }
            </div>
        )
    }
}

//Class kampanyentner-y kareli e miangamic export anel haytararelu jamanak