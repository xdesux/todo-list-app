import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm';

test('renders AddTaskForm and adds a task', () => {
  const addTask = jest.fn();

  render(<AddTaskForm addTask={addTask} />);

  const input = screen.getByPlaceholderText('Add a new task');
  const button = screen.getByText('Add Task');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});