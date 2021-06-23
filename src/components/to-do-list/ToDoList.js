import React, { useState } from 'react';

export default function ToDoList() {

    const [task, setTask] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    // let task = "";
    // const taskArr = []

    function setTaskValue(e) {
        setTask(e.target.value);
    }

    function onClickTaskAddHandler() {
        if (task) {
            console.log(task)
            taskArr.push(task);
            setTaskArr(taskArr);
            setTask("");
            // task = "";
        }
    }

    function removeTask(index) {
        console.log(index);
        console.log(taskArr[index]);
        setTaskArr(taskArr.filter((item, itemIndex) => itemIndex !== index));
        console.log(taskArr);
    }

    function editTask(index, newValue) {
        taskArr[index] = newValue;
        setTaskArr(taskArr);
    }

    return (
        <>
            <div>
                <h1>To Do List</h1>
                <textarea id="task" type="text" value={task} onChange={() => setTaskValue(event)}></textarea>
                <button id="btn" onClick={() => onClickTaskAddHandler()} style={{ marginLeft: 3 }}>Add</button>
            </div>
            <div>
                {console.log("Task Arr: ", { taskArr })}
                {JSON.stringify(taskArr)}
                <ol>
                    {taskArr && taskArr.map((item, index) => (
                        <GetTasks index={index} item={item} removeTask={removeTask} editTask={editTask} />
                    ))}
                </ol>
            </div>
        </>
    )
}

function GetTasks({ index, item, removeTask, editTask }) {
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState(item);

    function editHandler() {
        console.log(index);
        setIsEdit(!isEdit);
    }

    function saveTask() {
        if (task) {
            editTask(index, task);
            editHandler();
        }
    }

    return (
        <div key={task}>
            {!isEdit ? (<li className="list" key={task}> {index} || {task}
                <button style={{ marginLeft: 5 }} className="edit" onClick={() => editHandler()}> Edit</button>
                <button style={{ marginRight: 3 }} className="delete" onClick={() => removeTask(index)}> Delete</button>
            </li>) : (
                <div key={task}>
                    <textarea style={{ marginRight: 5 }} value={task} className="editTask" onChange={() => setTask(event.target.value)}></textarea>
                    <button className="saveTask" onClick={() => saveTask()}> Save Task </button>
                </div>)}
        </div>
    )
}