import express from 'express';
import { TaskControllers } from './controllers';
import { validate } from './middleware';
import { createTaskSchema, taskIdParamsSchema, updateTaskSchema } from '@/types/schema';

const routers = express.Router();

routers.route('/tasks')
  .get(validate({ query: updateTaskSchema }), TaskControllers.findTasks)
  .post(validate({ body: createTaskSchema, params: taskIdParamsSchema }), TaskControllers.createTasks)
  .put(validate({ params: taskIdParamsSchema, body: updateTaskSchema }), TaskControllers.updateTask)
  .delete(validate({ params: taskIdParamsSchema }), TaskControllers.deleteTask)

export default routers;