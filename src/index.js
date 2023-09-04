import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Search from "./components/Search"
import ToDoList from "./components/ToDoList"
import AddItem from "./components/AddItem";//aranc kampanyenti fayli anuny nshelov, avtomat man kga index.js anunov fayl
import './index.css'

const App = () => {
    const items=[
        {text:"Learn React", important:true, id:1},
        {text:"Learn QA", important:true, id:2},
        {text:"Learn PM", important:false, id:3},
        {text:"Learn Js", important:false, id:4},
        {text:"Learn Node.js", important:true, id:5},
        {text:"Learn Vue.js", important:false, id:6},
    ]

    return (
        <div className="app">
            <Header done={5} important={2}/>
            <Search />
            <ToDoList items={items}/>
            <AddItem/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)