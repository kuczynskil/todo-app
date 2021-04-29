import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {getTasks} from "./tasks";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
    }, [])

    return (
        <>
            <NewTask/>
            <Task/>
        </>

    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));