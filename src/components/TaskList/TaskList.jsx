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
                description: desc,
                completed: false,
                id: taskKey + 1,
                date: taskDate
            }]
        })

        setDesc(e => e = '')
        setTaskDate(e => e = '')
    }

    const addComplidted = (id) => {
        setTask((prevState) => {
            return [
                ...prevState.map(task => {
                    if (task.id === id) {
                        return { ...task, completed: !task.completed }
                    }
                    return task
                })
            ]
        })
    }

    const onSubmit = (e) => {

        if (e.key === 'Enter') {
            setDesc(() => e.target.value)
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
                        value={taskDate} />
                </label>
            </div>
            <ul className="list-group">
                {
                    tasks.map(item => (
                        !item.completed ?
                            <TaskItem
                                description={item.description}
                                addComplidted={(id) => addComplidted(id)}
                                key={item.id}
                                id={item.id}
                                date={item.date}
                                completed={item.completed}
                            />
                            : null
                    ))
                }
            </ul>
            <h4>Завершённые</h4>
            <ul className="list-group">
                {
                    tasks.map(item => (
                        item.completed ?
                            <TaskItem
                                description={item.description}
                                addComplidted={(id) => addComplidted(id)}
                                key={item.id}
                                id={item.id}
                                date={item.date}
                                completed={item.completed}
                            />
                            : null
                    ))
                }
            </ul>
            {console.log(tasks)}
        </>

    )
}