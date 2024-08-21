import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders TaskList with tasks', () => {
  const tasks = [
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: true },
  ];
  const completeTask = jest.fn();
  const removeTask = jest.fn();
  const updateTask = jest.fn();

  render(
    <TaskList
      tasks={tasks}
      completeTask={completeTask}
      removeTask={removeTask}
      updateTask={updateTask}
    />
  );

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});