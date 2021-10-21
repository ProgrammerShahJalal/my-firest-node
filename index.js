const express = require('express');
const app = express();
const port = 3000;
// const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello from first ever node")
})

app.listen(port, () => {
    console.log('listening to port', port);
})