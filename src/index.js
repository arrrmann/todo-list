import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import ToDoList from "./components/ToDoList/ToDoList"
import AddItem from "./components/AddItem/AddItem";
import './index.css'

const App = () => {

    return (
        <div className="app">
            <Header />
            <Search />
            <ToDoList />
            <AddItem/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)