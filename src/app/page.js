'use client'
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const Page = () => {
	const [tasks, setTasks] = useState([]);

	//useEffect(() => {
		//fetchTasks();
	//}, []);

	//const fetchTasks = async () => {
		//const response = await fetch('/task');
		//const data = await response.json();
		//setTasks(data);
	//};

	const addTask = (taskText) => {
        setTasks([...tasks, { text: taskText, completed: false }]);
    };

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const updateTask = (index, newText) => {
        const newTasks = [...tasks];
        newTasks[index].text = newText;
        setTasks(newTasks);
    };

	return (
		<div className="flex flex-col items-center justify-start min-h-screen p-10">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} completeTask={completeTask} removeTask={removeTask} />
        </div>
	);
};

export default Page;