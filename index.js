import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/ping', (req, res) => {
    res.send("<h1>/pong</h2>");
    console.log(req.method, req.url);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});