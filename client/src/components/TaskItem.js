import React from "react";

const TaskItem = ({task}) => {
    return (
        <div className="task-item">
            <ul className="task-item-list">

            <li className="task-item-title">{task?.title}</li>
            <li className="task-item-description">{task?.description}</li>
            <li className="task-item-status">{task?.status}</li>
            <li className="task-item-priority">{task?.assignee}</li>
            <li className="task-item-duedate">{task?.timeEstimate}</li>
            </ul>
        </div>
    )
}

export default TaskItem;