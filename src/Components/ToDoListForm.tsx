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
                type="text"
                placeholder="Add a task to the list"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="btn btn-primary"></button>
        </form>
    );
}

export default ToDoListForm;
