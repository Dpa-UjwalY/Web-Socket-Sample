const server = new WebSocket(`ws://192.168.6.39:3456/`)

const messages = document.getElementById('messages');
const message = document.getElementById('message');
const button = document.getElementById('button');

button.disabled = true;

server.onopen = () =>{
    button.disabled = false;
}

server.onmessage = (event) => {
    const { data } = event;
    generateMessage(data, 'Server');
}

const sendMessages =()=>{
    server.send(message.value);
    generateMessage(message.value, 'Client');
}

const generateMessage = (msg, type) =>{
    const newMessage = document.createElement("h3");
    newMessage.innerHTML = `${type} says: ${msg}`;
    messages.appendChild(newMessage);
}
button.addEventListener('click', sendMessages, false);





