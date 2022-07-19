import React from "react";

export const TaskItem = ({ description, completed }) => {

    return (
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" checked={completed} />
            {description}
        </li>
    )

}