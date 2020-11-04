let WebSocket = require('ws');

let wss = new WebSocket.Server({port: 8080});

let counter = 0;

wss.on("connection", (ws) =>{

    console.log("connected to socket");
    setInterval(()=>{
        ws.send("hello from server "+counter++)
    },3000)

    ws.on("message", (clientData) => {
        console.log("got data from client: "+clientData)
    })
   
})



