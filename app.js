const fastify = require('fastify')({logger: true});

fastify.register(require('@fastify/swagger'), {})
fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (req, rep, next) { next() },
        preHandler: function (req, rep, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, req, rep) => { return swaggerObject },
    transformSpecificationClone: true
})

const port = 5050;

fastify.register(require('./routes/tasks'))

const start = async () => {
    try{
        await fastify.listen({port})
        console.log(`Сервер запущен: http://0.0.0.0:${port}`);
    }
    catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
    
}

start()