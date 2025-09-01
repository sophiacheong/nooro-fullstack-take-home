import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  color: z.string(),
  completed: z.boolean(),
});

export const taskIdParamsSchema = z.object({
  id: z.string().uuid("Invalid UUID"),
});

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  color: z.string().optional(),
  completed: z.boolean().optional(),
})