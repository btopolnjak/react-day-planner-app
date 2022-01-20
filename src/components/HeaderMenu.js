import React, { useState } from "react";
import { BsClipboardPlus, BsClipboardCheck, BsClipboard } from "react-icons/bs";

export default function HeaderMenu({ headerMenuShow, addNewTask, clearCompleted, setTask }) {
    
    const [inputTask, setInputTask] = useState("")
    function handleInput() {
        if (!inputTask) return null;
        addNewTask(inputTask);
        setInputTask("");
    }
      
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
            <div className="menuIcons" onClick={() => setTask([])}>
                <BsClipboard />
            </div>
        </nav>
    )
}
