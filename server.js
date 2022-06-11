require("./Utils/mongo");
const express = require("express");
const cors = require("cors");
require("dotenv").config()
const port = 5000 ;
const app = express();
const userRoutes= require('./Router/userRoute')
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.send('Welcome to LABMAINT')
})
app.use('/api', require('./Controller/ParentLabUpload'))
app.use('/api',userRoutes)
app.listen(port, ()=>{
    console.log('Listening to port: ', port)
})