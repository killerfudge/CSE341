const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>This is a generic greeting</h1>');
        res.write('<form action="/create_user" method="POST"><input type="text" name="create"><button type="submit">create user</button></form>')
        res.write('</body > ');
        res.write('</html');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1 Users</title></body>');
        res.write('<body>');
        res.write('<h1>User</h1>');
        res.write('<ul><li>user1</li><li>user2</li><li>user3</li><li>user4</li></ul>');
        res.write('</body >');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create_user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;