const q = 'dataq';
// conect to q server
const open = require('amqplib').connect('amqp://localhost');

// consumer or subscription logic

open.then((conn)=>{
    return conn.createChannel();
}).then((receive)=>{
    // sunscribe to queue
    return receive.assertQueue(q)
                  .then((success)=>{
                       // start comsuming the message
                        return receive.consume(q, (message)=>{
                            if(message !==null) {
                                // process the message
                                // convert the message contents from the Queue into string
                                console.log(message.content.toString());
                                // acknowledhge
                                // the message is received completly
                                // the queue can remove the message from the queue store
                                receive.ack(message);
                            }
                        });  
                  });  
})
.catch(console.warn);