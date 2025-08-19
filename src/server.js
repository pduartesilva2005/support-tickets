import http from 'node:http';

function listener(request, response) {
  // Função
}

http.createServer(listener).listen(3333, () => {
  console.log('Server running!');
});
