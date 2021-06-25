import React, { useState } from 'react';
import GetTask from './GetTask';

export default function ToDoList() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function setTaskValue(e) {
        setTask(e.target.value);
    }

    function onClickTaskAddHandler() {
        if (task) {
            console.log(task)
            taskList.push(task);
            setTaskList(taskList);
            setTask("");
            // task = "";
        }
    }

    function removeTask(index) {
        console.log(index);
        console.log(taskList[index]);
        const updateList = taskList.filter((item, itemIndex) => itemIndex !== index);
        setTaskList(updateList);
        console.log(taskList);
    }

    function editTask(index, newValue) {
        taskList[index] = newValue;
        setTaskList(taskList);
    }

    return (
        <>
            <div>
                <h1>To Do List</h1>
                <textarea id="task" type="text" value={task} onChange={setTaskValue}></textarea>
                <button id="btn" onClick={() => onClickTaskAddHandler()} style={{ marginLeft: 3 }}>Add</button>
            </div>
            <div>
                {console.log("Task Arr: ", { taskList })}
                {JSON.stringify(taskList)}
                <ol>
                    {taskList && taskList.map((item, index) => (
                        <GetTask index={index} item={item} removeTask={removeTask} editTask={editTask} />
                    ))}
                </ol>
            </div>
        </>
    )
}