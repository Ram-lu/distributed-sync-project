const express = require('express');
const CORS = require('cors');
const userRouter = require('./src/presentation/routes/UserRoutes')
require('dotenv').config();


const app = express()

const { PORT_API } = process.env;

app.use(express.json());
app.use(CORS());

app.use('/api/v0.0.1/users', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT_API, 
    () => console.log(`Listening on port ${process.env.PORT_API}`))