const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/resume' , require('./router/resumeRoute'))

app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
  });


const PORT = 5000 || process.env.PORT

app.listen(PORT , () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .then(()=>{
        console.log('Database connection is successful')
    }).catch((err)=>{
         console.log(err)
    })
})