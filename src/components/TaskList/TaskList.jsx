import React, { useContext, useEffect, useMemo, useState } from "react";
import { SearchContext } from "../context/Search/SearchContext";
import { TaskItem } from "./TaskItem/TaskItem";

export const TaskList = () => {
    const [tasks, setTask] = useState(localStorage.getItem('tasks') !== null ? [...JSON.parse(localStorage.getItem('tasks'))] : []);
    const [desc, setDesc] = useState('');
    const [taskKey, setTaskKey] = useState(localStorage.getItem('kyes') !== null ? JSON.parse(localStorage.getItem('kyes')) : 0);
    const [taskDate, setTaskDate] = useState('');
    const { searchTasks } = useContext(SearchContext);
    
    const filterSearchTasks = useMemo(() => {
       return tasks.filter(task => {
            if (searchTasks === '') {
                return task
            }
            return task.description.toLowerCase().indexOf(searchTasks.toLowerCase()) !== -1
        })
    },[tasks,searchTasks])
    
    const tasksInWorks = filterSearchTasks.filter(task => !task.completed)
    const tasksCompleted = filterSearchTasks.filter(task => task.completed)

    useEffect(() => {
        localStorage.setItem('tasks', [JSON.stringify(tasks)])
        localStorage.setItem('kyes', [JSON.stringify(taskKey)])
    }, [tasks, taskKey])

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
            const delitItemIndex = prevState.findIndex(task => task.id === id) + 1
            return [
                ...prevState.slice(0, delitItemIndex - 1),
                ...prevState.slice(delitItemIndex, prevState.length + 1)
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
            <div className="d-flex mb-3 flex-md-row flex-column row g-2">
                <div className="col-md-4 col-lg-3 col-xl-2">
                    <button
                        className="btn btn-success col-12"
                        onClick={addTask}>
                        + Добавить задачу
                    </button>
                </div>

                <div className="col-md-5  col-lg-6 col-xl-8">
                    <input
                        className="form-control form-control-dark"
                        placeholder="Введите задачу"
                        type="text"
                        onKeyPress={onSubmit}
                        onChange={e => setDesc(e.target.value)}
                        value={desc}
                    />
                </div>

                <div className="col-md-3 col-xl-2">
                    <input
                        className="form-control form-control-dark "
                        type="date"
                        onChange={e => setTaskDate(e.target.value)}
                        value={taskDate} />
                </div>
            </div>

            <h4 className="mt-3">{searchTasks !== '' ? 'Результаты поиска' : 'Список дел'}</h4>
            <ul className="list-group">
                {
                    tasksInWorks.map(task => (
                        <TaskItem
                            task={task}
                            addComplidted={addComplidted}
                            deleteTask={deleteTask}
                            key={task.id}
                        />
                    ))
                }
            </ul>
            <h4 className="mt-3">Завершённые</h4>
            <ul className="list-group">
                {
                    tasksCompleted.map(task => (
                        <TaskItem
                            task={task}
                            addComplidted={addComplidted}
                            deleteTask={deleteTask}
                            key={task.id}
                        />
                    ))
                }
            </ul>
        </>
    )
}