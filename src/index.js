import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Search from "./components/Search"
import ToDoList from "./components/ToDoList"
import AddItem from "./components/AddItem";//aranc kampanyenti fayli anuny nshelov, avtomat man kga index.js anunov fayl
import './index.css'

class App extends Component {
    state = {
        items: [
            { text: "Learn React", important: true, id: 1 },
            { text: "Learn QA", important: true, id: 2 },
            { text: "Learn PM", important: false, id: 3 },
            { text: "Learn Js", important: false, id: 4 },
            { text: "Learn Node.js", important: true, id: 5 },
            { text: "Learn Vue.js", important: false, id: 6 },
        ]
    }

    onAddItem = (text) => {
        
        const newItem = {
            text,
            important: false,
            id: this.state.items.length > 0 ? this.state.items[this.state.items.length - 1].id + 1 : 1
            // id: this.state.items[this.state.items.length - 1].id + 1//vercnum enq verjin item-y u stanum enq dra id-in u plyus mek enq anum
        }

        this.setState((prevState) => {//prevState-i mej e ynknum naxord vijakov state-y
            return {
                items: [...prevState.items, newItem]
            }
        })
    }

    onRemoveBtn=(identification)=>{
        this.setState((prevState)=>{
            return{
                items: prevState.items.filter(item => item.id!==identification)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <Header done={5} important={2} />
                <Search />
                <ToDoList items={this.state.items} onRemoveBtn={this.onRemoveBtn}/>
                <AddItem onAddItem={this.onAddItem} />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)