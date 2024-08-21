import { updateTask, deleteTask } from '../../../src/prisma/task';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
	const data = req.body;
	const task = await updateTask(parseInt(id), data);
	res.status(200).json(task);
  } else if (req.method === 'DELETE') {
	await deleteTask(parseInt(id));
	res.status(204).end();
  } else {
	res.setHeader('Allow', ['PUT', 'DELETE']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}