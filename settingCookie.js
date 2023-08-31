/const http = require('http');
const cookie = require('cookie');

const server = http.createServer((req, res) => {
    // Setting a cookie
    const name = 'myCookie';
    const cookieValue = 'exampleValue';
    const cookieOptions = {
        path: '/',
        maxAge: 3600 // Expires after 1 hour
    };
    res.setHeader('Set-Cookie', cookie.serialize(name, cookieValue, cookieOptions));

    res.end('Cookie set');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
