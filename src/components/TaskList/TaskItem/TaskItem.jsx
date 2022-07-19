import React from "react";

export const TaskItem = ({ description, completed, date }) => {
    const clearDate = new Date(date).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const deadLine = Date.parse(new Date(date)) > Date.parse(new Date())
    
    return (
        <li className={`list-group-item ${deadLine ? 'list-group-item-danger' : ''}`}>
            <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
            // checked={completed}
            />
            {description}
            {date ? <small> (Срок: {clearDate})</small> : null}
        </li>
    )

}