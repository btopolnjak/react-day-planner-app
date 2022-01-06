import React, { useState } from "react";
import { BsClipboardPlus, BsClipboardCheck } from "react-icons/bs";

export default function HeaderMenu({ headerMenuShow, addNewTask, clearCompleted }) {
    
    const [inputTask, setInputTask] = useState("")
    function handleInput() {
        if (!inputTask) return null;
        addNewTask(inputTask);
        setInputTask("");
    }
    
    if (!headerMenuShow) { return null } else
    
    return (
        <nav>
            <input
                className="inputTask"
                type="text"
                placeholder="Add new task"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
            />
            <div className="menuIcons" onClick={() => handleInput()}>
                <BsClipboardPlus />
            </div>
            <div className="menuIcons" onClick={() => clearCompleted()}>
                <BsClipboardCheck />
            </div>
        </nav>
    )
}
