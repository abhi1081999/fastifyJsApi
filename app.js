const fastify = require('fastify')(

    {logger : true}
);

fastify.get('/', async function(request, reply) {

    reply.send({hello : 'brdr'});
      
})

	fastify.get('/g', async function(request, reply) {
      
        reply.redirect(303,'https://www.google.com');

})


fastify.listen(3000 , (err , address)=>{

    if(err){
    
        fastify.log.error(err)
    
        process.exit(1)
    }
    else{
        fastify.log.info(`server listening on ${address}` );
  
    }

})