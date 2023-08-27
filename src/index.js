import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Search from "./components/Search"
import ToDoList from "./components/ToDoList"
import User from "./components/User";

const App = () => {
    const users = [
        { name: 'John', age: 25, status: true },
        { name: 'Bob', age: 30, status: false },
        { name: 'Tom', age: 20, status: true },
        { name: 'Sam', age: 28, status: false },
        { name: 'Ann', age: 24, status: true },
    ]

    const user=users.map(({name, age, status})=>{
        return (<User name={name} age={age} status={status}/>)
    })

    return (
        <div>
            <Header />
            <Search />
            <ToDoList />
            {user}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)