import React from "react";
import { BsSquare, BsCheckSquareFill, BsXSquare } from "react-icons/bs";

export default function ListItems({ task, toggleTask, deleteTask, headerMenuShow }) {
    
    return (
        <section>
            {task.map(item => {
                return (
                    <div className="listItem" key={item.id}>
                        <div className="listIcons" onClick={() => toggleTask(item.id)}>
                            {item.completed ? <BsCheckSquareFill /> : <BsSquare />}
                        </div>
                        <p Style={item.completed ? "text-decoration: line-through" : "text-decoration: none"}>{item.name}</p>
                        <div className="listIcons" onClick={() => deleteTask(item.id)}><BsXSquare /></div>
                    </div>
                )
            })}
        </section>
    )
}
