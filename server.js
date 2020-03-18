const express = require('express');
const dotenv = require('dotenv')

//load env vars
dotenv.config({
    path: './config/config.env'
})

const app = express();

//Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))