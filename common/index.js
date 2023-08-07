const getHandlerOpts = (handler) => {
    return {
        // schema: {
        //     response: {
        //         200: res
        //     }
        // },
        handler
    }
}

const postHandlerOpts = (handler) => {
    return {
        // schema: {
        //     body: body,
        //     response: {
        //         200: res,
        //     }
        // },
        handler,  
    }
}


const task = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}


module.exports = {
    getHandlerOpts,
    postHandlerOpts,
    task,

}