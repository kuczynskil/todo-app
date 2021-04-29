import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {getTasks} from "./tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
    }, [])

    console.log(tasks);
    return <h1>Hello World</h1>
}

ReactDOM.render(<App/>, document.querySelector("#app"));