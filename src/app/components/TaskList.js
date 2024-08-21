import React from "react";
import TaskItem from './TaskItem';

//TaskList.propTypes

const TaskList = ({ tasks, completeTask, removeTask, updateTask }) => {
    return (
        <table className="w-full max-w-md border-collapse">
            <thead>
                <tr>
                    <th className="p-2 text-left">Task List</th>
                    <th className="p-2 text-left">Complete</th>
                    <th className="p-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        updateTask={updateTask}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;