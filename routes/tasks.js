const {TasksController} = require('../controllers/tasks')



function tasksRoutes (fastify, options, done) {

    fastify.get('/', TasksController.getMainPage);
    
    fastify.get('/tasks', TasksController.getTasks);
    
    fastify.get('/tasks/:id', TasksController.getTaskById);

    fastify.post('/tasks', TasksController.postTask);

    fastify.put('/tasks/:id', TasksController.updateTask);

    fastify.delete('/tasks/:id', TasksController.deleteTask);

    done()
}

module.exports = tasksRoutes