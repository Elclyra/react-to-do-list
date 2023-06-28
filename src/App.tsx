import React, { useEffect, useState } from "react";
import "./App.sass";
import ToDoListForm from "./Components/ToDoListForm";
import ToDoListItem from "./Components/ToDoListItem";

interface ListItem {
    id: number;
    value: string;
    completed: boolean;
}

function App() {
    const [tasks, setTasks] = useState<ListItem[] | any[]>(() => {
        const localValue = localStorage.getItem("TASKS");
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("TASKS", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(value: string) {
        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                { id: crypto.randomUUID(), value, completed: false },
            ];
        });
    }

    function toggleCompleted(id: number, completed: boolean) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }
                return task;
            });
        });
        console.log(tasks);
    }

    function deleteFromList(deletedTask: ListItem) {
        setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== deletedTask.id);
        });
    }

    return (
        <div className="app-container">
            <div className="app-header">
                <div className="text-center">
                    <h1>To do list</h1>
                </div>
            </div>
            <div className="app-form">
                <ToDoListForm onSubmit={addTask} />
            </div>
            <hr />
            {tasks.length === 0 && <h5>No tasks yet</h5>}
            <ul className="list-cover">
                {tasks.map((task) => (
                    <ToDoListItem
                        key={task.id}
                        task={task}
                        toggleCompleted={toggleCompleted}
                        deleteFromList={deleteFromList}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
export type { ListItem };
