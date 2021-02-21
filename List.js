import React from 'react';
import './App.css';
import TaskListItem from "./TaskListItem";
export default function List(props) {

    const taskArray = props.listItems.map(item => {
        return (<TaskListItem
            filterDone={props.filterDone}
            filterUndone={props.filterUndone}
            showAll={props.showAll}
            changeDoneState={props.changeDoneState}
            removeTask={props.removeTask}
            key={item.key}
            id={item.id}
            name={item.name}
            select={item.select} />);
    });
    return (
        <div>
            <button onClick={props.clearList}>ClearList</button>
            <button className="filter-done-button" onClick={props.filterDone}>Show Done</button>
            <button className="filter-undone-button" onClick={props.filterUndone}>Show Undone</button>
            <button className="show-all-button" onClick={props.showAll}>Show All</button>
            <ul>{taskArray}</ul>
        </div >
    );
}