import React, { useState } from "react";
import Button from "./Components/Button";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const listItems = tasks.map((task, idx) => (
        <li key={idx} className="list-group-item">
            {task}
        </li>
    ));

    const addToList = () => {
        setTasks([...tasks, input]);
        console.log(tasks);
    };

    return (
        <div>
            <div className="text-center">
                <h1>To do list</h1>
            </div>
            <div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add item to list"
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <Button onClick={addToList} />
            </div>
            <hr />
            <ul className="list-group">{listItems}</ul>
        </div>
    );
}

export default App;
