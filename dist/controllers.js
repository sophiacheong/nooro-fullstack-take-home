"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskControllers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.TaskControllers = {
    findTasks: async (req, res) => {
        const { title, color, completed } = req.query;
        const query = {
            title: title ? { contains: title } : undefined,
            color,
            completed
        };
        try {
            const [tasks, total, taskCompletedTotal] = await prisma.$transaction([
                prisma.task.findMany({ where: query }),
                prisma.task.count({ where: query }),
                prisma.task.count({ where: { completed: true } })
            ]);
            res.status(201).json({ tasks, total, taskCompletedTotal });
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to fetch tasks" });
        }
    },
    createTasks: async (req, res) => {
        const { title, color, completed } = req.body;
        try {
            const task = await prisma.task.create({
                data: { title, color, completed },
            });
            res.status(201).json(task);
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to create task" });
        }
    },
    updateTask: async (req, res) => {
        const { id } = req.params;
        const { title, color, completed } = req.body;
        try {
            const updateTask = await prisma.task.update({
                where: { id },
                data: { title, color, completed }
            });
            res.status(201).json(updateTask);
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to update task" });
        }
    },
    deleteTask: async (req, res) => {
        const { id } = req.params;
        try {
            await prisma.task.delete({
                where: { id }
            });
            res.status(201).json('Succesfully delete task');
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ error: "Failed to update task" });
        }
    }
};
