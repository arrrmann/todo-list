import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import ToDoList from "./components/ToDoList/ToDoList"
import AddItem from "./components/AddItem/AddItem";
import './index.css'

const App = () => {
    const items=[
        {text:"Learn React", important:true, id:1},
        {text:"Learn QA", important:true, id:2},
        {text:"Learn PM", important:false, id:3},
        {text:"Learn Js", important:false, id:4},
        {text:"Learn Node.js", important:true, id:5},
    ]

    return (
        <div className="app">
            <Header />
            <Search />
            <ToDoList items={items}/>
            <AddItem/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)