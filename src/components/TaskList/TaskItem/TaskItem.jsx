import React from "react";
// { description, completed, date, id, addComplidted}
export const TaskItem = ({ task, addComplidted }) => {
    const { description, completed, date, id } = task

    const clearDate = new Date(date).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const deadLine = Date.parse(new Date(date)) < Date.parse(new Date())

    return (
        <li className={`d-flex align-items-center justify-content-between list-group-item ${deadLine ? 'list-group-item-danger' : ''} ${completed ? 'text-decoration-line-through' : ''}`}>
            <span className="d-flex align-items-center">
                <label className=" me-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={completed}
                        onChange={() => addComplidted(id)}
                    />
                </label>
                {description}
                {date ? <small> (Срок: {clearDate})</small> : null}
            </span>
            <button className="btn btn-danger py-1 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
            </button>
        </li>
    )

}