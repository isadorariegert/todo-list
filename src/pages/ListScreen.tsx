import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import { TaskTS } from "../models/Task";

function ListScreen() {
    const [tasks, setTasks] = useState<TaskTS[]>([]);
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => setNewTaskLabel(e.target.value);
    const handleNewTaskKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && (e.currentTarget.value.trim().length != 0)) { //validation to deny insert blank spaces
            setTasks((tasks) => [...tasks, {id: nanoid(), label: newTaskLabel}])
            setNewTaskLabel(''); //to clear the input
        }
    };

    return (
    <div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.label}
                </li>
            ))}
        </ul>
        <input 
        type="text" 
        value={newTaskLabel} 
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeypress}
        />
    </div>
    )
}

export default ListScreen;