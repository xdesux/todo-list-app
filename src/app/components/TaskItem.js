import React, { useState } from 'react';

const TaskItem = ({ task, index, completeTask, removeTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateTask(index, newText);
        setIsEditing(false);
    };

    return (
        <tr className="border-b min-w-10 border-gray-300">
            <td className="p-2">
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="border p-1 w-full sm:w-auto"
                    />
                ) : (
                    <span className={`block ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.text}
                    </span>
                )}
            </td>
            <td className="p-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => completeTask(index)}
                    className="mr-2 place-content-center justify-center"
                />
            </td>
            <td className="p-2 flex flex-col sm:flex-row">
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white p-1 rounded mb-2 sm:mb-0 sm:mr-2"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 text-white p-1 rounded mb-2 sm:mb-0 sm:mr-2"
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={() => removeTask(index)}
                    className="bg-red-500 text-white p-1 rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskItem;