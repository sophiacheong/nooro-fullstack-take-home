import type { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';
import z from "zod";
import { createTaskSchema, taskIdParamsSchema, updateTaskSchema } from "../types/schema.ts";

const prisma = new PrismaClient();

type CreateTaskBody = z.infer<typeof createTaskSchema>;
type TaskIdParams = z.infer<typeof taskIdParamsSchema>;
type UpdateTaskBody = z.infer<typeof updateTaskSchema>;

export const TaskControllers = {
  findTasks: async (req: Request<{}, {}, {}, UpdateTaskBody>, res: Response) => {
    const { title, color, completed } = req.query;

    const query: Prisma.TaskWhereInput = {
      title: title ? { contains: title } : undefined,
      color,
      completed
    };

    try {
      const [tasks, total, taskCompletedTotal] = await prisma.$transaction([
       prisma.task.findMany({ where: query }),
       prisma.task.count({ where: query}),
       prisma.task.count({ where: { completed: true }})
      ]);

      res.status(201).json({ tasks, total, taskCompletedTotal });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  },
  createTasks: async (req: Request<{}, {}, CreateTaskBody>, res: Response) => {
    const { title, color, completed }  = req.body;

    try {
      const task = await prisma.task.create({
        data: { title, color, completed },
      });

      res.status(201).json(task);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to create task" });
    }
  },
  updateTask: async (req: Request<TaskIdParams, {}, UpdateTaskBody>, res: Response) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;

    try {
      const updateTask = await prisma.task.update({
        where: { id },
        data: { title, color, completed }
      })

      res.status(201).json(updateTask);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to update task" });
    }
  },
  deleteTask: async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
      await prisma.task.delete({
        where: { id }
      })

      res.status(201).json('Succesfully delete task');
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to update task" });
    }
  }
}