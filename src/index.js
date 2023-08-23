import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Search from "./components/Search"
import ToDoList from "./components/ToDoList"

const App=()=>{
    return(
        <div>
            <Header/>
            <Search/>
            <ToDoList/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)