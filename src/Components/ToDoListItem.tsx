import React from "react";
import { ListItem } from "../App";

interface Props {
    task: ListItem;
    toggleCompleted: (id: number, completed: boolean) => void;
    deleteFromList: (arg0: ListItem) => void;
}

function ToDoListItem({ task, toggleCompleted, deleteFromList }: Props) {
    return (
        <li
            className={
                task.completed
                    ? "list-cover-item list-cover-item__checked"
                    : "list-cover-item"
            }
        >
            <input
                checked={task.completed}
                onChange={(e) => {
                    toggleCompleted(task.id, e.target.checked);
                }}
                type="checkbox"
            />
            <span>{task.value}</span>
            <button
                onClick={(e) => {
                    let item = e.currentTarget.parentNode as HTMLElement;
                    item.classList.add("inactive");
                    setTimeout(() => {
                        deleteFromList(task);
                    }, 500);
                }}
            >
                X
            </button>
        </li>
    );
}

export default ToDoListItem;
