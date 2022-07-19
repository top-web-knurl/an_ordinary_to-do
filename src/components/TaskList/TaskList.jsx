import React, { useState } from "react";
import { TaskItem } from "./TaskItem/TaskItem";

export const TaskList = () => {
    const [tasks, setTask] = useState([]);
    const [desc, setDesc] = useState('');
    const [taskKey, setTaskKey] = useState(0);


    const addTask = () => {
        setTaskKey((prevKey) => prevKey + 1)
        setTask((prevState) => {
            return [...prevState, {
                desctiption: desc,
                completed: false,
                key: taskKey + 1
            }]
        })
        setDesc(e => e = '')
    }

    const onSubmit = (e) => {
        setDesc(() => e.target.value)
        if (e.key === 'Enter' && desc.trim() !== '') {
            addTask()
        }
    }

    return (
        <>
            <div className="">
                <button onClick={(() => addTask())}>
                    + Добавить задачу
                </button>
                <input
                    type="text"
                    onKeyPress={e => onSubmit(e)}
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                />
            </div>
            <ul className="list-group">
                {tasks.map(item => <TaskItem description={item.desctiption} complete={item.completed} key={item.key} />)}
            </ul>
        </>

    )
}