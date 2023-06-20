import React, { useState } from "react";

interface Props {
    onSubmit: (value: string) => void;
}

function ToDoListForm(props: Props) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (input === "") return;

        props.onSubmit(input);

        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="Add item to list"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="btn btn-primary">Add a task</button>
        </form>
    );
}

export default ToDoListForm;
