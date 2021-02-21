import * as React from 'react';
import './App.css';
import TaskInput from "./TaskInput";
import List from "./List";

function App() {
    const [taskList, setTaskList] = React.useState([]);
    const [doneTaskList, setDoneTaskList] = React.useState([]);
    const [ShowedTaskList, setShowedTaskList] = React.useState([]);
    function addTask(taskName) {
        const newTask = { name: taskName, id: Date.now(), select: false };
        const newList = [...taskList, newTask];
        const newDoneTaskList = [...doneTaskList, newTask];
        const newShowedTaskList = [...ShowedTaskList, newTask]
        setTaskList(newList);
        setDoneTaskList(newDoneTaskList);
        setShowedTaskList(newShowedTaskList);
    }
    function removeTask(id) {
        const newList = taskList.filter(task => task.id !== id);
        setTaskList(newList);
        setDoneTaskList(newList);
        setShowedTaskList(newList);
    }
    function removeAllTasks() {
        setTaskList([]);
        setDoneTaskList([]);
        setShowedTaskList([]);
    }
    function changeDoneState(id) {
        const newShowedTaskList = ShowedTaskList.map(task => {
            if (task.id === id) {
                task.select = !task.select;
            }
            return task;
        });
        setTaskList(newShowedTaskList);
        setDoneTaskList(newShowedTaskList);
    }
    function filterDone() {
        const newDoneList = doneTaskList.filter(task => task.select === true
        );
        setShowedTaskList(newDoneList);
        setDoneTaskList(taskList);
    }
    function filterUndone() {
        const newUndoneList = doneTaskList.filter(task => task.select === false
        );
        setDoneTaskList(taskList);
        setShowedTaskList(newUndoneList);
    }
    function showAll() {
        const newDoneList = taskList;
        setShowedTaskList(newDoneList);
    }
    return (
        <div>
            <TaskInput addTask={addTask} />
            <List
                removeTask={removeTask}
                listItems={ShowedTaskList}
                clearList={removeAllTasks}
                changeDoneState={changeDoneState}
                filterDone={filterDone}
                filterUndone={filterUndone}
                showAll={showAll}
            />
        </div>
    );
}

export default App;
