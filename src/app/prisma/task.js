import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTasks = async () => {
  return await prisma.task.findMany();
};

export const createTask = async (name, status) => {
  return await prisma.task.create({
	data: {
	  name,
	  status,
	},
  });
};

export const updateTask = async (id, data) => {
  return await prisma.task.update({
	where: { id },
	data,
  });
};

export const deleteTask = async (id) => {
  return await prisma.task.delete({
	where: { id },
  });
};