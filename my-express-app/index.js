const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, Philippines!');
});

app.get('/about', (req, res) => {
    res.send('about us!');
});

app.use(express.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});