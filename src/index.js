import React, { Component } from "react";//karox enq irar hetevic tvarkelov, import anel, kam destrukturizacnel---React-y export e arvac default, isk mnacacy export en arvac object-i tesqov
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Search from "./components/Search"
import ToDoList from "./components/ToDoList"
import AddItem from "./components/AddItem";//aranc kampanyenti fayli anuny nshelov, avtomat man kga index.js anunov fayl
import './index.css'

class App extends Component {
    state = {
        items: [
            { text: "Learn React", important: true, done:false, id: 1 },
            { text: "Learn QA", important: true, done:false, id: 2 },
            { text: "Learn PM", important: false, done:false, id: 3 },
            { text: "Learn Js", important: false, done:false, id: 4 },
            { text: "Learn Node.js", important: true, done:false, id: 5 },
            { text: "Learn Vue.js", important: false, done:false, id: 6 },
        ],
        term: '',
        filter: 'all'
    }

    onSearch = (term) => {
        this.setState({ term })
    }

    handleSearch = (items, term) => {
        if(term.trim().length===0){
            return items
        }

        return items.filter((item)=>{
            return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
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

    editItem = (itemIndex, newTextValue) => {
        const updatedItems = [...this.state.items]

        updatedItems[itemIndex].text = newTextValue
        this.setState({ items: updatedItems })
    }

    deleteItem = (identification) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((item) => item.id === identification)

            return {
                items: [
                    ...items.slice(0, idx),//skzbnaket: 0 index, verjnaket: idx (chi mtnum array-i mej, minchev et)
                    ...items.slice(idx + 1)//skzbnaket: idx+1 e u nor array-i mej mtnum e
                ]
            }
        })
    }

    onImportantAndonDone = (id, or_Done_or_Important) => {
        this.setState(({ items }) => {
            const idx=items.findIndex((el)=>el.id===id)
            const newItem={
                ...items[idx],
                [or_Done_or_Important]: !items[idx][or_Done_or_Important]
            }

            return {
                items:[
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx+1)
            ]}
        })
    }


    onBtnFilter=(items, filterBtn)=>{
        switch(filterBtn){
            case 'all': 
                return items;
            case 'done':
                return items.filter((el)=>el.done);
            case 'important':
                return items.filter((el)=>el.important && !el.done);
            default: return items
        }
    }

    onFilterChange=(filter)=>{
        this.setState({filter})
    }

    render() {
        const { items, term, filter } = this.state
        const visableItems = this.onBtnFilter(this.handleSearch(items, term), filter)

        const doneCount = items.filter((el)=> el.done).length
        const importnatCount=items.filter((el)=> el.important && !el.done).length

        return (
            <div className="app">
                <Header done={doneCount} important={importnatCount} />
                <Search onSearch={this.onSearch} onFilterChange={this.onFilterChange}/>
                <ToDoList
                    items={visableItems}
                    deleteItem={this.deleteItem}
                    editItem={this.editItem}
                    onImportantAndonDone={this.onImportantAndonDone}
                />
                <AddItem onAddItem={this.onAddItem} />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)