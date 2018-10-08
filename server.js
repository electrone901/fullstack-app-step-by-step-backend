const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send("Yay! Our express server is running."));
app.listen(port, () => console.log(`App is running at ${port}`))