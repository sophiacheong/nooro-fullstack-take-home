"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_ts_1 = require("./controllers.ts");
const middleware_ts_1 = require("./middleware.ts");
const schema_ts_1 = require("../types/schema.ts");
const routers = express_1.default.Router();
routers.route('/tasks')
    .get((0, middleware_ts_1.validate)({ query: schema_ts_1.updateTaskSchema }), controllers_ts_1.TaskControllers.findTasks)
    .post((0, middleware_ts_1.validate)({ body: schema_ts_1.createTaskSchema, params: schema_ts_1.taskIdParamsSchema }), controllers_ts_1.TaskControllers.createTasks)
    .put((0, middleware_ts_1.validate)({ params: schema_ts_1.taskIdParamsSchema, body: schema_ts_1.updateTaskSchema }), controllers_ts_1.TaskControllers.updateTask)
    .delete((0, middleware_ts_1.validate)({ params: schema_ts_1.taskIdParamsSchema }), controllers_ts_1.TaskControllers.deleteTask);
exports.default = routers;
