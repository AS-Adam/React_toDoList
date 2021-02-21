import React from 'react';
export default function TaskListItem(props) {
    return (
        <li>
            <h3><input type="checkbox" defaultChecked={false} onClick={() => { props.changeDoneState(props.id); }} />
                {props.name}<button onClick={() => { props.removeTask(props.id); }}>x</button></h3>
        </li>
    )
}