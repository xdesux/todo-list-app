import { createTask, getTasks } from '../../../src/prisma/task';

export default async function handler(req, res) {
  if (req.method === 'POST') {
	const { title, description } = req.body;
	const task = await createTask(title, description);
	res.status(201).json(task);
  } else if (req.method === 'GET') {
	const tasks = await getTasks();
	res.status(200).json(tasks);
  } else {
	res.setHeader('Allow', ['GET', 'POST']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}