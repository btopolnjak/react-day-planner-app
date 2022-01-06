import React from "react";
import { BsSquare, BsCheckSquareFill, BsXSquare } from "react-icons/bs";

export default function ListItems({ task, toggleTask, deleteTodo }) {
   
    return (
        <section>
            {task.map(item => {
                return (
                    <div className="listItem" key={item.id}>
                        <div className="listIcons" onClick={() => toggleTask(item.id)}>
                            {item.completed ? <BsCheckSquareFill /> : <BsSquare />}
                        </div>
                        <p>{item.name}</p>
                        <div className="listIcons" onClick={() => deleteTodo(item.id)}><BsXSquare /></div>
                    </div>
                )
            })}
        </section>
    )
}
