import React, { useState } from "react";
import { TaskItem } from "./TaskItem/TaskItem";

export const TaskList = () => {
    const [tasks, setTask] = useState([]);
    const [desc, setDesc] = useState('');
    const [taskKey, setTaskKey] = useState(0);
    const [taskDate, setTaskDate] = useState('');

    const tasksInWorks = tasks.filter(task => !task.completed)
    const tasksCompleted = tasks.filter(task => task.completed)

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

    const deleteTask = (id) => {

        setTask((prevState) => {
            const delitItemIndex = prevState.findIndex(task => task.id === id)
            return [
                ...prevState.slice(0, delitItemIndex),
                ...prevState.slice(delitItemIndex, prevState.length - 1)
            ]

        })

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
                    tasksInWorks.map(task => (
                        <TaskItem
                            task={task}
                            addComplidted={(id) => addComplidted(id)}
                            deleteTask={(id) => deleteTask(id)}
                            key={task.id}
                        />
                    ))
                }
            </ul>
            <h4>Завершённые</h4>
            <ul className="list-group">
                {
                    tasksCompleted.map(task => (
                        <TaskItem
                            task={task}
                            addComplidted={(id) => addComplidted(id)}
                            deleteTask={(id) => deleteTask(id)}
                            key={task.id}
                        />

                    ))
                }
            </ul>

        </>

    )
}


// но чтобы улучишься читаемость перепиши TaskItem чтоб он приинмал не набор полей а польностьтью объект task
// и вынести фильтрацию за пределы return.  Высчитай «заранее» заверешнные и не заверешенны таски