import React, { useState } from "react";
import Button from "./Components/Button";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState<any[]>([]);
    const [input, setInput] = useState("");

    const deleteFromList = (value: any) => {
        setTasks((oldValues) => {
            return oldValues.filter((task) => task.id !== value.id);
        });
    };

    const addToList = () => {
        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                { id: crypto.randomUUID(), value: input, completed: false },
            ];
        });
        setInput("");
    };

    function toggleCompleted(id: number, completed: boolean) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }
                return task;
            });
        });
    }

    const listItems = tasks.map((task) => (
        <li key={task.id} className="list-group-item">
            <input
                checked={task.completed}
                onChange={(e) => {
                    toggleCompleted(task.id, e.target.checked);
                }}
                type="checkbox"
            />
            <span>{task.value}</span>
            <button
                className="btn btn-danger"
                onClick={() => deleteFromList(task)}
            >
                Delete
            </button>
        </li>
    ));

    return (
        <div className="app-container">
            <div className="header">
                <div className="text-center">
                    <h1>To do list</h1>
                </div>
            </div>
            <div className="app-main">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add item to list"
                    value={input}
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
