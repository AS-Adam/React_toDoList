import React from 'react';
import './App.css';
export default function TaskInput(props) {
    const [currTask, setcurrTask] = React.useState("");
    function handleAdd() {
        if (currTask.length > 0) {
            //     setInputError({ display: false, message: "" });
            props.addTask(currTask);
            setcurrTask('');
        }
    }
    // else { setInputError({ display: true, message: "Invalid Input" }); }
    return (
        <div className="task-input-container">
            <label>Task name:
            <input value={currTask} onChange={e => setcurrTask(e.target.value)} type="text" />
            </label>
            <button className="add-task-button" onClick={handleAdd}>Add</button>
        </div>
    );
}

