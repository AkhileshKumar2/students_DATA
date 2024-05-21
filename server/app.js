const express = require('express');
const app = express();
const connectDB = require('./db/connection')
require('dotenv').config()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const students = require('./routes/api_routes')

const port = process.env.PORT || 8080;

//middeware
app.use(express.json());
app.use(express.static('./public'))
// Use CORS middleware
app.use(cors());


app.use(cookieParser());


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}......`))

    } catch (error) {
        console.log(error)
    }
}

start()


//Routes 
app.use('/api/v1/students', students)

