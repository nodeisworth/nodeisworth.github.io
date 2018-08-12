const basePath = "Courses/";

const courses = [
    {
        id: 1, title: "RabbitMQ with NodeJS", logo: "courseimages/rabbitmq.png",  overlayStyle: { "background-color": "rgba(2,179,228,.8)" }, pages: [
            {id:1,title: "Why use RabbitMQ",githuburl:"https://github.com/mregydev/nodeisworth/tree/master/rabbitmq/whyuserabbitmq", path: basePath + "rabbitmq/whyrabbitmq.html" },
            {id:2, title: "How rabbitmq works",githuburl:"", path: basePath + "rabbitmq/howrabbitmqworks.html" },
            {id:3, title: "Installing RabbitMq",githuburl:"", path: basePath + "rabbitmq/installRabbitMq.html" },
            {id:4, title: "Work Queues",githuburl:"https://github.com/mregydev/nodeisworth/tree/master/rabbitmq/workqueues", path: basePath + "rabbitmq/workqueues.html" }
        ]
    },
     {
        id: 2, title: "NodeJS Concepts", logo: "courseimages/nodelogo.png",  overlayStyle: { "background-color": "rgba(169,81,237,.8)" }, pages: [
            {id:1,title: "exports vs module.exports",githuburl:"", path: basePath + "nodeConcepts/exportsvsmoduleexports.html" },
        ]
    },
     {
        id: 3, title: "Javascriprt Concepts", logo: "courseimages/js.png",  overlayStyle: { "background-color": "rgba(255,162,52,.8)" }, pages: [
            {id:1,title: "Let vs Var",githuburl:"", path: basePath + "jsConcepts/letvsvar.html" },
           
        ]
    }
];
