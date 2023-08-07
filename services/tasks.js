let tasks = require('../tasksEx');

//const db = require('../common/db')('Category')

const db = require('../common/db')('Category')



const getMainPage = () => {
    return 'Hi! This is the main page'
};

const getTasks = async () => {
    // const res = await db.read()
    //return pool.query('SELECT * FROM Task')
    return (await db.read()).rows
};

const getTask =  async ({id}) => {
    //res = await db.read(id)
    //console.log(res.rows)  
    return (await db.read(id)).rows
};

const addTask = async ({name, nameLat}) => {
    //const {name} = req.body
    //  const task = {
    //     name,
    //     nameLat
    //  }
    
    // console.log(res.rows)

    return (await db.create({...{name, nameLat}})), { message: `Задание ${name} создано`}
};

const updateTask = async ({id}, {name, nameLat}) => {
    return (await db.update(id, { ...{name, nameLat}}))
}

const deleteTask = async ({id}) => {
    //const {id} = req.params

    // tasks = tasks.filter(task => task.id !== id)
    // for( i = 0; i <= tasks.length; i++){
    //     if(i == id){
    //         tasks[i].id = String(Number(tasks[i].id) - Number(id) + 1)
    //     } 
    // } 
    return (await db.delete(id)), { message: `Задание с id = ${id} удалено`}
    //return pool.query(`DELETE FROM ${db} WHERE id == ${id}`)
};


module.exports = {
    getMainPage,
    getTask,
    getTasks,
    addTask,
    deleteTask,
    updateTask,
}