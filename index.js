const express = require('express')
const app = express()
const connectTodb = require('./db/connection')
require('dotenv').config()
const routes = require('./routes/route')
app.use(express.json())

app.use('/api', routes )
app.get('/', (request, response) => response.send('employee Data'))

const startConnection = async() => {
    try{
        await connectTodb(process.env.MongoUrl)
        app.listen(3000, () => console.log('server is live in port 3000'))
    }
    catch (err){
        console.log(err)
    }
}

startConnection()




