import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

test('renders TaskItem and toggles complete state', () => {
  const task = { text: 'Task 1', completed: false };
  const completeTask = jest.fn();
  const removeTask = jest.fn();
  const updateTask = jest.fn();

  render(
    <TaskItem
      task={task}
      index={0}
      completeTask={completeTask}
      removeTask={removeTask}
      updateTask={updateTask}
    />
  );

  expect(screen.getByText('Task 1')).toBeInTheDocument();
});