const express = require('express');
const CORS = require('cors');
require('dotenv').config();


const app = express()

const { PORT_API } = process.env;

app.use(express.json());
app.use(CORS());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT_API, 
    () => console.log(`Listening on port ${process.env.PORT_API}`))