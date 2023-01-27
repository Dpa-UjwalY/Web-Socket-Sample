const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port : 3456
})

wss.on('connection', (ws)=>{

    ws.on('message', (data)=>{
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(data.toString())
            }
        });
    })
})