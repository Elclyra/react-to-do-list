import React from "react";
import { ListItem } from "../App";

interface Props {
    task: ListItem;
    toggleCompleted: (id: number, completed: boolean) => void;
    deleteFromList: (arg0: ListItem) => void;
}

function ToDoListItem({ task, toggleCompleted, deleteFromList }: Props) {
    return (
        <li className="list-cover-item">
            <input
                checked={task.completed}
                onChange={(e) => {
                    toggleCompleted(task.id, e.target.checked);
                }}
                type="checkbox"
            />
            <span>{task.value}</span>
            <button onClick={() => deleteFromList(task)}>X</button>
        </li>
    );
}

export default ToDoListItem;
