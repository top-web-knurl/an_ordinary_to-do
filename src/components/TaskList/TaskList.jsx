import React, { useState } from "react";
import { TaskItem } from "./TaskItem/TaskItem";

export const TaskList = () => {
    const [tasks, setTask] = useState([]);
    const [desc, setDesc] = useState('');
    const [taskKey, setTaskKey] = useState(0);
    const [taskDate, setTaskDate] = useState('');

    const addTask = () => {
        if (desc.trim() === '') return

        setTaskKey((prevKey) => prevKey + 1)
        setTask((prevState) => {
            return [...prevState, {
                desctiption: desc,
                completed: false,
                key: taskKey + 1,
                date: taskDate
            }]
        })

        setDesc(e => e = '')
        setTaskDate(e => e = '')
    }

    const onSubmit = (e) => {
        setDesc(() => e.target.value)
        if (e.key === 'Enter') {
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
                <label>
                    <input 
                    type="date" 
                    onChange={e => setTaskDate(e.target.value)} 
                    value={taskDate}/>
                </label>
            </div>
            <ul className="list-group">
                {tasks.map(item => <TaskItem description={item.desctiption} completed={item.completed} key={item.key} date={item.date} />)}
            </ul>
        </>

    )
}