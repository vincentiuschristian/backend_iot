const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const { error } = require('console')

const mongoURL = 'mongodb://0.0.0.0:27017/firedetect'

mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Berhasil connect ke database')
}).catch((error) => {
    console.log('Gagal connect', error)
})

app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))

//routes
app.use('/user', require('./routes/User'))

app.listen(4000, () =>{
    console.log('Server telah dijalankan')
})
