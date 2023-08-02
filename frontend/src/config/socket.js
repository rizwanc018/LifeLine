import io from 'socket.io-client';

const socket = io.connect('http://localhost:5001');
// const socket = io.connect('http://10.4.4.27:5001');

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

socket.onclose = (event) => {
    console.log('WebSocket connection closed with code:', event.code, 'reason:', event.reason);
};

export default socket;