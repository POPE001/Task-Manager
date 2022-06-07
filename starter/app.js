const connectDB = require('./db/connect')
const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

require("dotenv").config()
//middleware to parse json
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)


const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, ()=> {
      console.log(`server is listening on ${port}...`);
    })  
  }
  catch(error){
    console.log(error);
  }
}

start()
