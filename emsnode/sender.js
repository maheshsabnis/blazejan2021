const amqp = require('amqplib');

// subscribe to the RabbitMQ Service
// default is available on port 5672

let open  = require('amqplib').connect('amqp://localhost');

// create a channel and start sending test data

open.then((conn)=>{
    return conn.createChannel(); // create a channel with the Rabbit MQ Host so that data can be send 
}).then((channel)=>{
    // define a queuq in a channel
    let qname = 'dataq';

    // configure the queue for sending the data
    // assertQueue() will create a queue is nnot present and if availabel then will be used for messaging
    return channel.assertQueue(qname).then((ack)=>{
        // prepare data to send
        const data = [
            {id:1,name:'A'},{id:2,name:'B'}
        ];
        // send the data
        // since the data in queue is send as Buffer message
        // use Buffer.from()
        return channel.sendToQueue(qname, Buffer.from(JSON.stringify(data)));
    });

}).catch(console.warn);