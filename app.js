const express = require('express');
const loggerMiddleware = require('loggerMiddleware.js');

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('App Home Page');
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});