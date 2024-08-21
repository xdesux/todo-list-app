import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="border p-2 mr-2"
                placeholder="Add a new task"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;

