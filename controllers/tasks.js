//const { v4:uuidv4 } = require('uuid')
let tasks = require('../tasksEx');

const { getHandlerOpts, postHandlerOpts, task } = require('../common');
//const { getMainPage, getTask, getTasks, addTask, deleteTask } = require('../services/tasks')
const TasksServices = require('../services/tasks')
const TasksController = {
    getMainPage: (req, rep) => {
        rep.send(TasksServices.getMainPage())
    },
    getTasks: getHandlerOpts(async (req, rep) => {
        rep.send(await TasksServices.getTasks())
    }),
    getTaskById: getHandlerOpts(async (req, rep) => {
        rep.send(await TasksServices.getTask(req.params))
    }),
    deleteTask: getHandlerOpts(async (req, rep) => {
        rep.send(await TasksServices.deleteTask(req.params))
    }),
    postTask: postHandlerOpts(async (req, rep) => {
        rep.send(await TasksServices.addTask(req.body))
    }),
    updateTask: getHandlerOpts(async (req, rep) => {
        rep.send(await TasksServices.updateTask(req.params, req.body))
    })

   
}


module.exports = {
    TasksController,
}
