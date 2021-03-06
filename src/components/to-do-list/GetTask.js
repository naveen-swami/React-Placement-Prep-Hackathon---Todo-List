import React, { useEffect, useState } from 'react';

export default function GetTask({ index, item, removeTask, editTask }) {
    console.log("In side get task",index, item);
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState(item);

    useEffect(() => {
        setTask(item);
    }, [item]);

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

    function taskEditOnCahngeClickHandler(e) {
        setTask(e.target.value);
    }

    return (
        <>
            {/* <li className="list"> {index} || {task}
                <button style={{ marginLeft: 5 }} className="edit" onClick={() => editHandler()}> Edit</button>
                <button style={{ marginRight: 3 }} className="delete" onClick={() => removeTask(index)}> Delete</button>
            </li> */}
            {!isEdit ? (<li className="list"> {index} || {task}
                <button style={{ marginLeft: 5 }} className="edit" onClick={() => editHandler()}> Edit</button>
                <button style={{ marginRight: 3 }} className="delete" onClick={() => removeTask(index)}> Delete</button>
            </li>) : (
                <div >
                    <textarea style={{ marginRight: 5 }} value={task} className="editTask" onChange={taskEditOnCahngeClickHandler}></textarea>
                    <button className="saveTask" onClick={() => saveTask()}> Save Task </button>
                </div>)}
        </>
    )
}