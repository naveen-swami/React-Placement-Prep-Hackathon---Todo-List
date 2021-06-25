import React, { useState } from 'react';

export default function GetTask({ index, item, removeTask, editTask }) {
    console.log("In side get task",index, item);
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState(item);

    function editHandler() {
        console.log(index);
        setIsEdit(!isEdit);
    }

    function saveTask() {
        if (task) {
            editHandler();
            editTask(index, task);
        }
    }

    return (
        <>
            <li className="list"> {index} || {task}
                <button style={{ marginLeft: 5 }} className="edit" onClick={() => editHandler()}> Edit</button>
                <button style={{ marginRight: 3 }} className="delete" onClick={() => removeTask(index)}> Delete</button>
            </li>
            {/* {!isEdit ? (<li className="list"> {index} || {task}
                <button style={{ marginLeft: 5 }} className="edit" onClick={() => editHandler()}> Edit</button>
                <button style={{ marginRight: 3 }} className="delete" onClick={() => removeTask(index)}> Delete</button>
            </li>) : (
                <div >
                    <textarea style={{ marginRight: 5 }} value={task} className="editTask" onChange={() => setTask(event.target.value)}></textarea>
                    <button className="saveTask" onClick={() => saveTask()}> Save Task </button>
                </div>)} */}
        </>
    )
}